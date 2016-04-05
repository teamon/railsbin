module Runner
  class API < Grape::API
    version 'v1', using: :path
    format :json
    prefix :api

    resource :containers do
      get do
        [1,2,3]
      end
    end
  end
end
