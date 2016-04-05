require "init"

module Runner
  class API < Grape::API
    version 'v1', using: :path
    format :json
    prefix :api

    rescue_from Docker::Error::NotFoundError

    get :info do
      Docker.info
    end

    resource :containers do
      get do
        Docker::Container.all
      end

      get ":id" do
        container = Docker::Container.get(params[:id])
        container.json
      end
    end
  end
end
