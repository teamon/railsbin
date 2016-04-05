require "init"

module Runner
  class API < Grape::API
    version 'v1', using: :path
    format :json
    prefix :api

    get :info do
      Docker.info
    end

    resource :containers do
      get do
        Docker::Container.all all: true
      end
    end
  end
end
