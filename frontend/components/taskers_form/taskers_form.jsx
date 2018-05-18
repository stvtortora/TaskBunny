import React from 'react';
import Tasker from './Tasker';
import NavBar from '../nav_bar/nav_bar';
import Modal from './modal';
import { connect } from 'react-redux';


class TaskersIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Modal />
        <div className='all-content'>
          <header className='form_header'>
            <h1>Pick a Tasker</h1>
            <p>Select from our list of vetted taskers!</p>
          </header>
          <div>
            {this.props.taskers}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const searchResults = state.entities.search.results;
  const taskers = Object.keys(searchResults).map(taskerId => {
    const tasker = searchResults[taskerId];
    return <Tasker key={taskerId} id={taskerId} name={tasker.name} description={tasker.description} rate={tasker.rate}/>;
  });

  return {
    taskers
  }
}

export default connect(mapStateToProps)(TaskersIndex);
