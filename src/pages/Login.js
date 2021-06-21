import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';


class Login extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      disableLogin: true,
    };
    this.handle = this.handle.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  validation() {
    const { email, password, loginButton } = this.state;
    const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const PASSWORD_LENGTH = 6;
    if(EMAIL_REGEX.test(email) && password.length >= PASSWORD_LENGTH) {
      this.setState({ loginButton: false });
    } else if(!loginButton) {
      this.setState({ loginButton: true });
    }
  }

  handle(e) {
    const { value, type } = e.target;
    this.setState(
      { [type]: value },
      () => (this.validation()),
    );
  }

  handleLogin(e) {
    e.preventDefault();
    const { loginUser } = this.props;
    const { email } = this.state;
      loginUser(email);
  }

  render() {
    const { email, password, disableLogin } = this.state;

    return(
      <form>
        <label htmlFor="email-input">
          <input
          type="email"
          id="email-input"
          data-testid="email-input"
          placeholder="email"
          onChange={ this.handle }
          value={ email }
          />
        </label>
        <label>
          <input
            type="password"
            id="password-input"
            data-testid="password-input"
            placeholder="password"
            onChange={ this.handle }
            value={ password }
          />
        </label>
        <button 
        type="submit" 
        disabled={ disableLogin }
        onClick={ this.handleLogin }
        >
          <Link to='/carteira'>Entrar</Link>
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email) => dispatch(loginUser(email)),
});

Login.propTypes = { handleLogin: func.isRequired };

export default connect (null, mapDispatchToProps)(Login);
