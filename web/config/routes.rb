Rails.application.routes.draw do
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/sign_out', to: 'sessions#destroy', as: :sign_out

  resources :gists, param: :uid do
    member do
      post :start
    end
  end
  resources :containers, only: [:index, :show] do
    member do
      post :stop
    end
  end

  get :dashboard, to: "home#dashboard"

  root to: "home#index"
end
