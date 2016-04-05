Rails.application.routes.draw do
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/sign_out', to: 'sessions#destroy', as: :sign_out

  resources :gists
  resources :containers, only: [:index, :show]

  root to: "home#index"
end
