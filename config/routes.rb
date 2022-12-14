Rails.application.routes.draw do

  # get "/trips", to: "trips#index"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # post "/trips", to: "trips#create"
  get "/travelmethods", to: "travel_methods#index"
  get "/trips/:id/tasks", to: "tasks#renderTasks"
  post "/tasks", to: "tasks#create"
  get "/tasks", to: "tasks#index"
  resources :trips, only: [:index, :create, :destroy]
  patch "/tasks/:id", to: "tasks#update"
  patch "/methodtasks/:id", to: "method_tasks#update"
  get "tasks/:id", to: "tasks#show"
  get "/methodtasks/:id", to: "method_tasks#show"
  # delete "/tasks/:id", to: "tasks#destroy"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
