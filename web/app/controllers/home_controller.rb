class HomeController < ApplicationController
  def index
  end

  def dashboard
    @gists = current_user.gists.all

    @containers = Container.all
    @containers.each do |container|
      client = Client.new(container.host.address)
      info = client.get(container.cid)
      container.state = info["state"]
    end
  end
end
