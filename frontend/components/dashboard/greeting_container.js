import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  const userId = state.session.id;
  const user = state.entities.users[userId];
  debugger

  return {
    user
  }
}

export default connect(mapStateToProps)(Greeting);
