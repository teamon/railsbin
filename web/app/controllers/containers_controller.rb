class ContainersController < ApplicationController
  def index
    @containers = Container.all

    @containers.each do |container|
      client = Client.new(container.host.address)
      info = client.get(container.cid)
      container.state = info["state"]
    end
  end

  def show
    @container = Container.find(params[:id])
  end

  def stop
    container = Container.find(params[:id])
    client = Client.new(container.host.address)
    client.stop(container.cid)

    redirect_to containers_path
  end
end
