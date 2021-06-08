import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      passwordInvalid: true,
      emailInvalid: true,
    };
  }

  handlePassword(event) {
    const password = event.target.value;
    const LENGTH_PASSWORD = 6;
    if (password.length >= LENGTH_PASSWORD) {
      this.setState({
        passwordInvalid: false,
      });
    }
  }

  handleEmail(event) {
    // código tirado do site: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const re = /\S+@\S+\.\S+/;
    if (re.test(event.target.value)) {
      this.setState({ emailInvalid: false });
    }
  }

  handleClick() {
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { passwordInvalid, emailInvalid } = this.state;
    return (
      <div>
        <form>
          Email
          <input
            data-testid="email-input"
            type="email"
            onChange={ this.handleEmail }
          />
          Password
          <input
            data-testid="password-input"
            type="password"
            onChange={ this.handlePassword }
          />
          <button
            type="submit"
            disabled={ emailInvalid || passwordInvalid }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.arrayOf.isRequired,
};

export default Login;
