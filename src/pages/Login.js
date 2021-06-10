import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link as button } from 'react-router-dom';

import '../css/loginPage.css';
import { setNameAction, setPasswordAction } from '../redux/actions/userAction';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { username, password } = this.state;
    const { setUsername, setPassword } = this.props;
    return (
      <form className="login-form">
        <label htmlFor="username" className="login-label">
          Insira um nome de usuário:
          <input
            type="text"
            name="username"
            id="username"
            value={ username }
            placeholder="Username"
            maxLength="30"
            data-testid="email-input"
            onChange={ (e) => this.handleChange(e.target) }
          />
          <input
            type="password"
            onChange={ (e) => this.setState({ password: e.target.value }) }
            placeholder="senha"
            data-testid="input-password"
          />
        </label>
        <button
          type="submit"
          to="/products"
          onClick={ (e) => {
            if (!username) {
              e.preventDefault();
            }
            setUsername(username);
            setPassword(password);
          } }
          className="login-btn"
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUsername: (username) => dispatch(setNameAction(username)),
  setPasswordAction: (password) => dispatch(setPasswordAction(password)),
});

export default connect(null, mapDispatchToProps)(Login);
