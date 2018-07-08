import React from 'react';
import TasksIndex from './tasks_index';
import CategorySuggestions from './category_suggestions';

const Greeting = ({ user }) => {
  if(!user.id){
    return (
      <section className="intro-content">
        <h2 className="header">The convenient & fast way <br/> to get things done around the house</h2>
        <h1 className='subheader'>Choose from our Taskers to get quick help.</h1>
        <CategorySuggestions />
      </section>
    );
  }

  return (
    <div>
      <section className="intro-content">
        <h2 className='header'>Welcome, {user.username}</h2>
      </section>
      <div className='task_index'>
        <TasksIndex id={user.id}/>
      </div>
    </div>
  )
}

export default Greeting;
