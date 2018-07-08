# Task Bunny
https://taskbunny.herokuapp.com/#/

## Overview

Inspired by Task Rabbit, Task Bunny is an application for booking professionals for home improvement, moving help, furniture assembly, and more. The application walks users through a multi-stage form, in which they are prompted to specify details about the task they need completed. It was built with a Ruby on Rails backend, React/Redux frontend, and a PostgreSQL database.

## The Reusable Searchbar

The category and location portions of the form both utilize a search component which updates in real time as the user types. For example, if a user types 'ne' in the location search, 'New York, NY' is fetched from the database and offered as a suggestion.

Since the functionality for both searches are similar, I decided to keep my code DRY by sharing the same search component between them. To distinguish between the two, I used Redux's connect function to implement seperate containers for categories and locations. Within each container, the search component is supplied with a fetchResults method that is specific to the type of data we want to receive. That is, 'fetchReults' dispatches the 'fetchCategories' action in the category search container, and the 'fetchLocations' action in the location search container. Consequently, the actual search component can simply call 'fetchResults' and reamin agnostic to the type of data it's retrieving.

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

After a user specifies some details about the task they need done, they are presented with a list of 'Taskers'. Up until this point, Redux has been accumulating task details into a 'currentTask' slice of state. To retrieve Taskers from the database, the data from the currentTask slice is sent to the backend through a GET request. The Tasker controller then uses Active Record associations to find Taskers whose data match the parameters of the request.

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

Since the app features a multi-stage form, data from previous stages of the form would be lost from the currentTask slice without a way to preserve Redux state when the page reloads. This is a problem because the backend relies on currentTask for it's parameters, and it expects it's parameters to always contain the same type of information. To address this, I used local storage. Every time state changes, the store's subscribe method ensures that local storage is updated with the most current version of currentTask. I also preloaded the contents of local storage into the my Redux state to retrieve the data needed for currentTask whenever the page reloads.

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
