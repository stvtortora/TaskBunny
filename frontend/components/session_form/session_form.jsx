import React from 'react';
import { withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
  }

  update (field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => {
      this.props.history.push('/');
    });
  }

  renderErrors() {
    return(
      this.props.errors.map((error) => (
          <div>
            {error}
          </div>
        ))
    );
  }

  render () {
    return (
      <div className='page-content' id='session-page'>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <h1>{this.props.formName}</h1>
          <div className="ui-messages">{this.renderErrors()}</div>
          <div className='form-field'>
            <label>Username</label>
            <input type="text" value={this.state.user} onChange={this.update('username')}/>
          </div>
          <div className='form-field'>
            <label>Password</label>
            <input type="password" value={this.state.user} onChange={this.update('password')}/>
          </div>
          <button type='submit'>{this.props.formName}</button>
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
