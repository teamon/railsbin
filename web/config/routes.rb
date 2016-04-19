Rails.application.routes.draw do
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/sign_out', to: 'sessions#destroy', as: :sign_out

  resources :gists, param: :uid do
    member do
      post :start
      post :stop
      post :restart
    end
  end

  namespace :admin do
    resources :gists
    resources :hosts
    resources :users

    root to: "hosts#index"
  end

  root to: "home#index"
end
