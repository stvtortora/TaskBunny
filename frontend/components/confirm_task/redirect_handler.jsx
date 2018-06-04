import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import ConfirmTask from './confirm_task';

class RedirectHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!this.props.formInSession) {
      this.props.history.push('/');
    }
  }

  render() {
    if(this.props.formInSession) {
      return <ConfirmTask />
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    formInSession: Boolean(state.entities.currentTask.location)
  }
}

export default withRouter(connect(mapStateToProps)(RedirectHandler));
