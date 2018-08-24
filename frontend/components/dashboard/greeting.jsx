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
      </section>
    );
  }

  if(user.type === 'Client'){
    return (
      <div className="intro-content">
        <section>
          <h2 className='header'>Welcome, {user.username}</h2>
        </section>
        <div className='task_index'>
          <TasksIndex id={user.id}/>
        </div>
      </div>
    )
  }
console.log('wtf mate')
  return (
    <div className='intro-content-container'>
      <section className="intro-content">
        <h2 className='header'>Welcome, {user.username}</h2>
      </section>
      <div className='task_index'>
      </div>
      <div className='tasker-info-container'></div>
      <TaskerInfo />
    </div>
  )
}
// <ManageTasks user={user}/>

export default Greeting;
