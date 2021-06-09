import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loginAction from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loged: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.veryfyEmail = this.veryfyEmail.bind(this);
    this.veryfyButton = this.veryfyButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.veryfyEmail();
    });
  }

  veryfyEmail() {
    const { email, password } = this.state;
    const emailPadrao = /^([\w.-]+)@([\w-]+)((.(\w){2,3})+)$/;
    const passwordLimit = 6;
    this.setState({
      loged: emailPadrao.test(email) && password.length >= passwordLimit,
    });
  }

  veryfyButton() {
    const { email } = this.state;
    const { login } = this.props;
    login(email);
  }

  render() {
    const { email, password, loged } = this.state;
    return (
      <div className="Login">
        <section className="login-inputs">
          <input
            type="text"
            name="email"
            id="email-input"
            placeholder="alguem@alguem.com"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            id="password-input"
            placeholder="Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </section>
        <div className="link">
          <Link to="/carteira">
            <button
              type="button"
              disabled={ !loged }
              onClick={ this.handleClick }
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
