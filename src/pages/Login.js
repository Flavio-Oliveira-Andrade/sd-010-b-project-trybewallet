import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      disabled: true,
    };
  }

  // Lógica de validação de inputs desenvolvida com a ajuda de Paulo Henrique Lima - Turma 10 - Tribo B e
  // Aladino Borges - Turma 10 - Tribo B

  handleChange() {
    const MIN_PASSWORD_LENGTH = 6;
    const regexEmail = /\S+@\S+\.\S+/;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (regexEmail.test(email) && password.length >= MIN_PASSWORD_LENGTH) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { disabled } = this.state;
    return (
      <section>
        Login
        <input
          id="email"
          data-testid="email-input"
          type="email"
          placeholder="Digite aqui o seu e-mail"
          onChange={ this.handleChange }
        />
        <input
          id="password"
          data-testid="password-input"
          type="password"
          placeholder="Digite sua senha"
          onChange={ this.handleChange }
        />
        <button type="button" disabled={ disabled }>Entrar</button>
      </section>
    );
  }
}

export default Login;
