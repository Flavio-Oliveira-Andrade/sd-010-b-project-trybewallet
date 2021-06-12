import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loged: true,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.veryfyEmail = this.veryfyEmail.bind(this);
    this.saveLogin = this.saveLogin.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { email, password } = this.state;
    const passwordLimit = 5;
    this.setState({
      [name]: value,
    });
    if (this.veryfyEmail(email) && (password.length >= passwordLimit)) {
      this.setState({
        loged: false,
      });
    } else {
      this.setState({
        loged: true,
      });
    }
  }

  saveLogin(e) {
    e.preventDefault();
    const { login } = this.props;
    const { email, password } = this.state;
    if (email && password) {
      login({ type: 'LOGIN', payload: email });
      this.setState({ redirect: true });
    }
  }

  veryfyEmail(email) {
    const emailPadrao = /^([\w.-]+)@([\w-]+)((.(\w){2,3})+)$/;
    return emailPadrao.test(email);
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    const { loged } = this.state;
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
          <button
            type="button"
            disabled={ loged }
            onClick={ this.saveLogin }
          >
            Entrar
          </button>
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
