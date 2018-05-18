import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  // const userId = state.session.id;
  // const user = state.entities.users[userId];
  debugger
  const user = state.session;

  return {
    user
  }
}

export default connect(mapStateToProps)(Greeting);
