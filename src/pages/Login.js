import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link as button } from 'react-router-dom';

import '../css/loginPage.css';
import { setEmailAction, setPasswordAction } from '../redux/actions/userAction';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className="login-form">
        <label htmlFor="email" className="login-label">
          E-mail
          <input
            type="email"
            name="email"
            id="email"
            value={ email }
            placeholder="E-mail"
            data-testid="email-input"
            onChange={ (e) => this.handleChange(e.target) }
          />
          <input
            type="password"
            onChange={ (e) => this.setState({ password: e.target.value }) }
            placeholder="senha"
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          className="login-btn"
          // to="/products"
          onClick={ (e) => {
            if (!email) {
              e.preventDefault();
            }
            setEmailAction(email);
            setPasswordAction(password);
          } }
        >
          Entrar
        </button>
      </form>
    );
  }
}

// Login.propTypes = {
//   setEmailAction: PropTypes.func.isRequired,
//   setPasswordAction: PropTypes.func.isRequired,
// };

const mapDispatchToProps = (dispatch) => ({
  setEmailAction: (email) => dispatch(setEmailAction(email)),
  setPasswordAction: (password) => dispatch(setPasswordAction(password)),
});

export default connect(null, mapDispatchToProps)(Login);
