import React from 'react';
import Tasker from './tasker';
import NavBar from '../nav_bar/nav_bar';
import FormTracker from '../form_tracker/form_tracker';
import { connect } from 'react-redux';
import { updateFormTracker } from '../../actions/form_actions';


class TaskersIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.updateFormTracker('taskers');
  }

  render() {
    const headerMessage = this.props.taskers.length > 0 ? 'Select from our list of vetted taskers!' : 'No taskers match your criteria. Please try again later.'

    return (
      <div>
        <NavBar />
        <FormTracker />
        <div className='all-content'>
          <header className='form_header'>
            <h1>Pick a Tasker</h1>
            <p>{headerMessage}</p>
          </header>
          <div>
            {this.props.taskers}
          </div>
        </div>
      </div>
    )
  }
}
// <Modal />

const mapStateToProps = (state) => {
  const searchResults = state.entities.search.results;
  const taskers = Object.keys(searchResults).map(taskerId => {
    const tasker = searchResults[taskerId];
    return <Tasker key={taskerId} id={taskerId} name={tasker.name} description={tasker.description} rate={tasker.rate} imageUrl={tasker.image_url}/>;
  });

  return {
    taskers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFormTracker: (currentForm) => dispatch(updateFormTracker(currentForm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskersIndex);
