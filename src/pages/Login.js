import React from 'react';
// import PropTypes from 'prop-types';

class Login extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.validacao = this.validacao.bind(this);
    this.handleChange = this.handleChange.bind(this);
  } */

  render() {
    return (
      <section>
        <div>Tela de Login</div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input type="email" name="email" data-testid="email-input" required />
          </label>
          <label htmlFor="password">
            Senha:
            <input type="password" name="password" data-testid="password-input" />
          </label>
          <button type="button">
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
