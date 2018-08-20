# Task Bunny
https://taskbunny.herokuapp.com/#/

## Overview

Inspired by Task Rabbit, Task Bunny is an application for booking professionals for home improvement, moving help, furniture assembly, and more. The application walks users through a multi-stage form, in which they are prompted to specify details about the task they need completed. It was built with a Ruby on Rails backend, React/Redux frontend, and a PostgreSQL database.

## The Reusable Searchbar

The category and location portions of the form both utilize a search component which updates in real time as the user types. For example, if a user types 'ne' in the location search, 'New York, NY' is fetched from the database and offered as a suggestion.

Since the functionality for both searches are similar, I decided to keep my code DRY by sharing the same search component between them. To distinguish between the two, I used Redux's `connect` function to implement separate containers for categories and locations. Within each container, the search component is supplied with a `fetchResults` method that is specific to the type of data we want to receive. That is, `fetchResults` dispatches the `fetchCategories` action in the category search container, and the `fetchLocations` action in the location search container. Consequently, the actual search component can simply call `fetchResults` and remain agnostic to the type of data it's retrieving.

``` javascript
handleChange(e) {
  if(this.timeout){
    clearTimeout(this.timeout);
  }
  this.setState(
    { searchQuery: e.target.value },
    () => {
      this.timeout = setTimeout(() => this.props.fetchResults(this.state.searchQuery).then(() => {
        this.props.modDropdown(true)
      }), 500)
    }
  );
}
```

## Matching Users with Taskers

After a user specifies some details about the task they need done, they are presented with a list of `Taskers`. Up until this point, Redux has been accumulating task details into a `currentTask` slice of state. To retrieve `Taskers` from the database, the data from the currentTask slice is sent to the backend through a GET request. The `Taskers` controller then uses Active Record associations to find `Taskers` whose data match the parameters of the request.

``` ruby
class Api::TaskersController <ApplicationController
  def index
    @taskers = Tasker
                    .joins(:categories)
                    .joins(:sizes)
                    .joins(:vehicles)
                    .joins(:time_slot_registrations)
                    .where('time_slot_registrations.filled = ?', false)
                    .where('categories.id = ?', task_info[:category][:id])
                    .where('taskers.location_id = ?', task_info[:location][:id])
                    .where('sizes.title ilike ?', task_info[:size])
                    .where('vehicles.title ilike ?', task_info[:vehicle])

    render 'api/taskers/index'
  end

  def task_info
    params[:task_info]
  end
end
```

## Maintaining State

Since the app features a multi-stage form, data from previous stages of the form would be lost from the `currentTask` slice without a way to preserve Redux state when the page reloads. This is a problem because the backend relies on `currentTask` for it's parameters, and it expects it's parameters to always contain the same type of information. To address this, I used local storage. Every time state changes, the store's `subscribe` method ensures that local storage is updated with the most current version of `currentTask`. I also preloaded the contents of local storage into the my Redux state to retrieve the data needed for `currentTask` whenever the page reloads.

``` javascript
document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: { id: window.currentUser.id, username: window.currentUser.username, taskIds: [] },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        },
        currentTask: loadCurrentTask()
      }
    };
    delete window.currentUser;
  } else {
    preloadedState = {
      entities: {
        currentTask: loadCurrentTask()
      }
    }
  }

  let store = configureStore(preloadedState);

  store.subscribe(() => {
    saveCurrentTask(store.getState().entities.currentTask);
  });

  const root = document.getElementById('root');
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, root);
});
```

## What's next?

Currently, I'm working on building features that will allow users to sign up as a `Tasker`. To start, I've implemented single table inheritance. Instead of `User` and `Tasker` belonging to different tables in the database, they now both belong to the `Users` table. Accordingly, separate models are implemented for `Client` and `Tasker`, which each inherit from `User`.

```ruby
#client.rb
class Client < User
  #some code
end

#tasker.rbb
class Tasker < User
  #some code
end
```
Now, both ```Client``` and ```Tasker``` can make use of ```User``` methods, which allow for user authentication.

HTTP requests for relating to ```Clients``` and ```Taskers``` are now both handled by the ```UsersController```. To make this change, I created the following routes:

```ruby
#config.rb
namespace :api, defaults: {format: :json} do
  resources :clients, controller: 'users', type: 'Client', only: [:create]
  resources :taskers, controller: 'users', type: 'Tasker', only: [:create, :index]
  #some other routes
end
```

Finally, the ```UsersController``` is made more flexible in order to handle requests made for multiple models. For instance, here is the ```create``` method, along with a helper method that determines the appropriate model:

```ruby
def create
  @user = class_name.new(user_params)

  if @user.save
    login(@user)
    if @user.is_a? Client
      render "api/users/show"
    else
      render "api/users/taskers/show"
    end
  else
    render json: @user.errors.full_messages, status: 422
  end
end

def class_name
  params[:type].constantize
end
```
