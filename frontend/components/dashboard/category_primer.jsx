import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addToTask } from '../../actions/tasks_actions';

class CategoryPrimer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const category = this.props.category;
    this.props.addToTask({ category });
    this.props.history.push("/taskform/details");
  }

  render() {

    return (
      <div className='category-primer' onClick={this.handleClick}>
        <img className='primer-image' src={this.props.picture} />
        <div className='primer-message'>
          <h3>{this.props.message}</h3>
          <div className='submit-container' >
            <button id='primer-button'>Book {this.props.displayName}</button>
          </div>
        </div>
      </div>
    );
  }
  }


  const mapDispatchToProps = dispatch => {
    return {
      addToTask: (task_info) => dispatch(addToTask(task_info)),
    }
  }

export default withRouter(connect(null, mapDispatchToProps)(CategoryPrimer));
