# Task Bunny

Live: https://taskbunny.herokuapp.com/#/

## Overview

Inspired by Task Rabbit, Task Bunny is a booking app for moving help, furniture assembly, and more. The application walks clients through a multi-stage form, in which they are prompted to specify details about the task they need completed. Users can also sign up as a tasker and specify details about their services. Task Bunny was built with a Ruby on Rails backend, React/Redux frontend, and a PostgreSQL database.

## Two Types of Users

As mentioned above, Task Bunny supports two types of users: `Client` and `Tasker`. This is implemented via single table inheritance (STI). That is, both the `Client` and `Tasker` models inherit from the `User` model. In effect, all users are stored in the same PostgreSQL table and share some functionality. One major benefit of STI is that it promotes DRY code. For example, for both user types, HTTP requests can be handled via a single `UsersController` and authentication can be implemented once in the `User` model. Below is a code snippet from the `UsersController` for creating users that shows this in action.  

```ruby
def create
  @user = class_name.new(user_params)

  if @user.save
    login(@user)

    render "api/users/show"
  else

    render json: @user.errors.full_messages, status: 422
  end
end
```

Let's address two key points in the code above. The `class_name` method uses the request's params to determine which model to create a new instance of. The `login` method leverages methods defined in the `User` model to begin a session.

## Matching Users with Taskers

After the client specifies some details about the task they need done, they are presented with a list of taskers. Up until this point, Redux has been accumulating details the client enters into a `currentTask` slice of state. To retrieve taskers from the database, the data from the `currentTask` slice is sent to the backend through a GET request. The `UsersController` then leverages Active Record associations to find taskers whose data match the parameters of the request. Here's the code for this filtering process:

``` ruby
class Api::UsersController < ApplicationController
  #....

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

  #...
end
```

## Maintaining State

Since the app features a multi-stage form, data from previous stages of the form would be lost from the `currentTask` slice without a way to preserve Redux state when the page reloads. This is a problem because the backend relies on `currentTask` for it's parameters. To address this, I used local storage. Every time state changes, the store's `subscribe` method ensures that local storage is updated with the most current version of `currentTask`. I also preloaded the contents of local storage into the my Redux state to retrieve the data needed for `currentTask` whenever the page reloads. Here are the methods for storing and loading data with local storage:

``` javascript
import store from '../store/store';

export const loadData = (itemName) => {
  const serializedState = localStorage.getItem(itemName);
  if(serializedState){
    return JSON.parse(serializedState);
  }
  return undefined;
}

export const saveData = (data, itemName) => {
  const serializedState = JSON.stringify(data);
  localStorage.setItem(itemName, serializedState);
}
```

## The Reusable Searchbar

Search bars are used in four different contexts in this application; clients and taskers each use them to search for either categories or locations. To keep my code DRY, the same components are used in each context. To distinguish between category and location search bars, I passed context-specific props to components via Redux containers. For example, the `Search` component is passed a `fetchResults` method prop. This prop is either the `fetchCategories` method or `fetchLocations` method, depending on the context. Consequently, the `Search` can simply call `fetchResults` and remain agnostic to the type of data it's retrieving.

The main differences between search components used by taskers and clients are stylistic. To account for these differences, components were again fed context-specific props that determined which CSS properties they should have. Here's code from the search component's render method which demonstrates this:

``` javascript
render() {
  const tasker = this.props.toggleEditMode ? true : false;

  if(this.props.show){

    return (
      <div className="search" id={tasker ? 'tasker-search' : 'client-search'} >
        <input className='search_bar' id={tasker ? 'tasker-search-bar' : 'client-search-bar'} type="text" value={this.state.searchQuery} placeholder={this.props.placeholder}  onClick={this.handleClick} onChange={ this.handleChange } />
        <QueryDropdown reduceSize={tasker ? true : false} searchQuery={this.state.searchQuery} open={this.props.open} path={ this.props.path } type={this.props.type}/>
      </div>
    );
  }

  return null;
}
```
