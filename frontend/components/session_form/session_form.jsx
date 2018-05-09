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
      <ul>
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
      <form className='session-form' onSubmit={this.handleSubmit}>
        <h1>{this.props.formName}</h1>
        <div>{this.renderErrors()}</div>
        <ul>
          <li className='form-label'>Username</li>
          <li className='form-field'><input value={this.state.user} onChange={this.update('username')}/></li>
          <li className='form-label'>Passoword</li>
          <li className='form-field'><input value={this.state.user} onChange={this.update('password')}/></li>
          <li className='form-field' id='submit'><input type='submit' value={this.props.formName}/></li>
        </ul>
      </form>
    );
  }

}

export default SessionForm;
