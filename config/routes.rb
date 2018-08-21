Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :clients, controller: 'users', type: 'Client', only: [:create]
    resources :taskers, controller: 'users', type: 'Tasker', only: [:create, :index, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :sizes, controller: 'task_attributes', type: 'Size', only: [:index]
    resources :vehicles, controller: 'task_attributes', type: 'Vehicle', only: [:index]
    resources :categories, only: [:index]
    resources :locations, only: [:index]
    resources :time_slots, only: [:index]
    resources :tasks, only: [:create, :index, :destroy]
    resources :category_registrations, controller: 'registrations', type: 'CategoryRegistration', only: [:create, :destroy]
    resources :time_slot_registrations, controller: 'registrations', type: 'TimeSlotRegistration', only: [:create, :destroy]
    resources :sizes_registrations, controller: 'registrations', type: 'SizeRegistration', only: [:create, :destroy]
    resources :vehicles_registrations, controller: 'registrations', type: 'VehicleRegistration', only: [:create, :destroy]
  end
end
