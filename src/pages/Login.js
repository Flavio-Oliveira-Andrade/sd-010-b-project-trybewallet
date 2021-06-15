import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import loginAction from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      logout: true,
      redirect: true,

    };
    this.handleChenge = this.handleChenge.bind(this);
    this.veryfyEmail = this.veryfyEmail.bind(this);
    this.saveLogin = this.saveLogin.bind(this);
  }

  handleChenge(e) {
    const { name, value } = e.target;
    const { email, password } = this.state;
    const passwordMin = 5;
    this.setState({
      [name]: value,
    });
    if (this.veryfyEmail(email) && (password.length >= passwordMin)) {
      this.setState({
        logout: false,
      });
    } else {
      this.setState({
        logout: true,
      });
    }
  }

  saveLogin(e) {
    e.preventDefault();
    const { login } = this.props;
    const { email, password } = this.state;
    if (email && password) {
      login({ type: 'LOGIN', playload: email });
      this.setState({ redirect: true });
    }
  }

  veryfyEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    const { logout } = this.state;
    return (
      <div>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="senha"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <div>
          <button
            type="button"
            disabled={ logout }
            onClick={ this.saveLogin }
          >
            Entrar
          </button>

        </div>
      </div>
    );
  }
}
const mapDispatchToPros = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});
Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToPros)(Login);
