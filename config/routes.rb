Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :clients, controller: 'users', type: 'Client', only: [:create]
    resources :taskers, controller: 'users', type: 'Tasker', only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :sizes, only: [:index]
    resources :vehicles, only: [:index]
    resources :categories, only: [:index]
    resources :locations, only: [:index]
    resources :time_slots, only: [:index]
    resources :tasks, only: [:create, :index, :destroy]
  end

  resources :time_slot_registrations, only: [:update]
end
