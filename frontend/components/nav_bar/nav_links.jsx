import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';

class NavLinks extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.currentLocation = this.currentLocation.bind(this);
  }

  handleClick (route) {
    return () => {
      this.props.history.push(route)
    }
  }

  currentLocation () {
    return this.props.history.location.pathname;
  }

  render () {
    const currentLocation = this.currentLocation();

    return (
      this.props.user.id ?
        <div className='nav-links'>
          <div className='nav-option' id={currentLocation === "/" ? 'selected-link': ''} onClick={this.handleClick('./')}>{this.props.user.type === 'Client' ? 'Search' : 'Your Details'}</div>
          <div className='nav-option' id={currentLocation === "/tasks" ? 'selected-link': ''} onClick={this.handleClick('./tasks')}>Bookings</div>
        </div> : null
    )
  }
}

const mapStateToProps = state => ({
  user: state.session
})

export default withRouter(connect(mapStateToProps)(NavLinks))
