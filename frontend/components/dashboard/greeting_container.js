import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return {
    user: state.session.id
  }
}

export default connect(mapStateToProps)(Greeting);
