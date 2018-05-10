import React from 'react';


class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update (field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.action(this.state);
  }

  renderErrors() {
    return(
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className='page-content' id='session-page'>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <h1>{this.props.formName}</h1>
          <div>{this.renderErrors()}</div>
          <div className='form-field'>
            <label>Username</label>
            <input type="text" value={this.state.user} onChange={this.update('username')}/>
          </div>
          <div className='form-field'>
            <label>Passoword</label>
            <input type="password" value={this.state.user} onChange={this.update('password')}/>
          </div>
          <button type='submit'>{this.props.formName}</button>
        </form>
      </div>
    );
  }

}

export default SessionForm;
