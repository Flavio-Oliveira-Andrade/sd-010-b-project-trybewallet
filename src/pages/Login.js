import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import { handleUserLogin as loginAction } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disableBtn: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const { email, password, disableBtn } = this.state;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordLength = 6;
    if (emailRegex.test(email) && password.length >= passwordLength) {
      this.setState({ disableBtn: false });
    } else if (!disableBtn) {
      this.setState({ disableBtn: true });
    }
  }

  handleChange(event) {
    const { value, type } = event.target;
    this.setState(
      { [type]: value },
      () => (this.validate()),
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const { handleUserLogin } = this.props;
    const { email } = this.state;
    handleUserLogin(email);
  }

  render() {
    const { email, password, disableBtn } = this.state; 
    
    return (
      <form>
        <label htmlFor="email-input">
          <input
            type="email"
            id="email-input"
            data-testid="email-input"
            placeholder="email"
            onChange={ this.handleChange }
            value={ email }
          />
         <label htmlFor="password-input">
          <input
              type="password"
              id="password-input"
              data-testid="password-input"
              placeholder="password"
              onChange={ this.handleChange }
              value={ password }
            />
          </label> 

          <button
            type="submit"
            disabled={ disableBtn }
            onClick={ this.handleSubmit }
          >
            <Link to="carteira">Entrar</Link>
          </button>
        </label>
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  handleUserLogin: (email) => dispatch(loginAction(email)),
});

Login.propTypes = { handleUserLogin: func.isRequired };

export default connect(null, mapDispatchToProps)(Login);
