import React from 'react';
import { withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {username: '', password: '', name: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update (field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const params = this.props.formName === 'Become a Tasker' ? this.state : {username: this.state.username, password: this.state.password};
    this.props.action(params).then(() => {
      debugger
      this.props.closeModal();
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
          {
          this.props.formName === 'Become a Tasker' ?
          <div className='form-field'>
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={this.update('name')}/>
          </div> : null
          }
          <div className='form-field'>
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={this.update('username')}/>
          </div>
          <div className='form-field'>
            <label>Password</label>
            <input type="password" value={this.state.password} onChange={this.update('password')}/>
          </div>
          <div className='session-submit-container'>
            <button type='submit'>{this.props.formName}</button>
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
