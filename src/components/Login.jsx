import React from 'react';
import loginUser from '../actions/index'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      inputLogin: '',
      email: '',
      action: true,
    }
  }

  validateEmail(mail) {
    const format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // Alessandra passou o Regex que ela utilizou no projeto dela.
    if (mail.match(format)) {
      return true;
    }
      return false;
    }
    
    validateEmailAndPassword() {
      const { inputLogin, password } = this.state;
      const minLength = 6;
      if (this.validateEmail(inputLogin) === true && password.length >= minLength) {
       this.setState({
          action: false,
         });
     } else {
        this.setState({
          action: true,
        });
      }
    } 

  handleClick = () => {
    const { login } = this.props;
    const input = document.getElementById('login').value;
    login(input);
  }
  
  handleChange = async ({ target }) => {
    const button = document.getElementById('button');
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateEmailAndPassword());
  }

  render () {
    const { inputLogin, password, action } = this.state;
    return (
      <form>
        <label htmlFor='login'>
          Login
          <input
            value={ inputLogin }
            name='inputLogin'
            type='email'
            id='login'
            onChange={ (event) => this.handleChange(event) }
            data-testid="email-input"
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            value={ password }
            onChange={ (event) => this.handleChange(event) }
            type='password'
            name='password'
            id='password'
            data-testid="password-input"
            minLength='6'
          />
        </label>
        <button type='submit' id='button' onClick={ () => this.handleClick() } disabled={ action }>
          <Link to='/carteira'>
            Entrar
          </Link>
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (mail) => dispatch(loginUser(mail)),
})

export default connect(null, mapDispatchToProps)(Login);
