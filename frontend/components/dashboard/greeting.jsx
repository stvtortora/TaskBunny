import React from 'react';
import TasksIndex from './tasks_index';
import ManageTasks from './manage_tasks';
import TaskerInfo from './tasker_info';
import CategorySuggestions from './category_suggestions';
import CategorySearch from '../search/category_search_container';

const Greeting = ({ user }) => {
  if(!user.id){
    return (
      <section className="intro-content">
        <h2 className="header">Everything you need done. <br/> One place.</h2>
        <h1 className='subheader'>Tell us what you need done and get matched with skilled bunnies instantly.</h1>
        <CategorySuggestions />
        <div className='category-search-container'>
            <CategorySearch show={true} type={null}/>
        </div>
      </section>
    );
  }

  if(user.type === 'Client'){
    return (
      <div className="intro-content">
        <section>
          <h2 className='header'>Welcome, {user.username}</h2>
        </section>
        <div className='category-search-container'>
           <CategorySearch show={true} type={null}/>
        </div>
      </div>
    )
  }

  return (
    <div className='intro-content-container'>
      <section className="intro-content-tasker">
        <h2 className='header' id='tasker-header'>Welcome, {user.username}</h2>
      </section>
      <div className='task_index'>
      </div>
      <TaskerInfo />
    </div>
  )
}
// <ManageTasks user={user}/>

export default Greeting;
