import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: false,
      loged: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.veryfyEmail = this.veryfyEmail.bind(this);
  }

  handleChange(e) {
    const { value, id } = e.target;
    const emailPadrao = /^([\w.-]+)@([\w-]+)((.(\w){2,3})+)$/;
    const passwordLimit = 6;
    if (id === 'email') {
      if (emailPadrao.test(value)) {
        this.setState({
          loged: true,
          email: value,
        });
      } else {
        this.setState({
          loged: false,
        });
      }
    }
    if (id === 'password') {
      if (value.length >= passwordLimit) {
        this.setState({
          password: true,
        });
      } if (value.length !== passwordLimit) {
        this.setState({
          password: false,
        });
      }
    }
  }

  veryfyEmail() {
    const { email } = this.state;
    const { login } = this.props;
    login(email);
  }

  render() {
    const { password, loged } = this.state;
    let valid = false;
    if (loged && password) {
      valid = true;
    }
    return (
      <div className="Login">
        <section className="login-inputs">
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
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </section>
        <div className="link">
          <Link to="/carteira">
            <button
              type="button"
              disabled={ !valid }
              onClick={ this.veryfyEmail }
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
// #Passo 01
