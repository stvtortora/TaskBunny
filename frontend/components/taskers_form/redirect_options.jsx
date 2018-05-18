import React from 'react';
import { withRouter } from 'react-router';

class RedirectOptions extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick(field) {
    return () => {
      this.props.history.push(`/${field}`);
    }
  }

  render(){
    return (
      <div className='tasker-schedule' id='redirect-box'>
        <h3 className='tasker-schedule-header' id='redirect-header'>You Must Login to Book a Task</h3>
        <div className='redirect-buttons'>
          <div id='redirect-button' className='custom-button' onClick={this.handleClick('signup')}>Sign Up</div>
          <div id='redirect-button' className='custom-button' onClick={this.handleClick('login')}>Login</div>
        </div>
      </div>
    )
  }
}

export default withRouter(RedirectOptions);
