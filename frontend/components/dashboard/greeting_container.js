import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  const user = state.session;

  return {
    user
  }
}

export default connect(mapStateToProps)(Greeting);
