require "init"

module Runner
  AppFailedToStart = Class.new(StandardError)

  class API < Grape::API
    version 'v1', using: :path
    format :json
    prefix :api

    rescue_from Docker::Error::NotFoundError

    rescue_from AppFailedToStart do |e|
      error!({error: e.class.name}, 422)
    end

    get :info do
      Docker.info
    end

    resource :containers do
      get ":id" do
        container = Docker::Container.get(params[:id])
        container.json
      end

      params do
        requires :main
        optional :gemfile
      end
      post do
        # 1. create new container
        container = Docker::Container.create(
          'Image' => 'railsbin/core',
          'Cmd'   => ['/exec', 'minirails', 'main.rb'],
          'ExposedPorts' => {
            '5000/tcp' => {}
          },
          'PublishAllPorts' => true
        )

        # 2. create file hash with app files
        tar = StringIO.new(Docker::Util.create_tar({
          "main.rb" => params[:main].to_s,
          "Gemfile" => params[:gemfile]
        }.select {|_,v| v}))

        # 3. put files inside container
        container.archive_in_stream("/app") do
          tar.read(Excon.defaults[:chunk_size]).to_s
        end

        # 4. start the container
        container.start

        # 5. give it some time to start
        sleep 1

        # 6. get port mappings
        network_settings = container.json["NetworkSettings"]
        ports_mapping = network_settings["Ports"]

        raise AppFailedToStart.new(container) unless ports_mapping


        # 7. render response
        {
          id:     container.id,
          ports:  Hash[ports_mapping.map {|k,v| [k.split("/").first, v.first["HostPort"]] }]
        }
      end
    end
  end
end
