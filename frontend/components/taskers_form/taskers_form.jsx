import React from 'react';
import Tasker from './Tasker';
import Modal from './modal';
import { connect } from 'react-redux';


class TaskersIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Modal />
        {this.props.taskers}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const searchResults = state.entities.search.results
  const taskers = Object.keys(searchResults).map(taskerId => {
    const tasker = searchResults[taskerId];
    return <Tasker key={taskerId} name={tasker.name} description={tasker.description} rate={tasker.rate}/>;
  });

  return {
    taskers
  }
}

export default connect(mapStateToProps)(TaskersIndex);
