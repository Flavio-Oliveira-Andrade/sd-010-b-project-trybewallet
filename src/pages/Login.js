import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      btnEnabler: true,
    };
    this.inputsValidation = this.inputsValidation.bind(this);
  }

  inputsValidation() {
    const { email, password } = this.state;
    const emailValidation = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
    const passwordValidation = /\d{5,}/;
    if (email.match(emailValidation) && password.match(passwordValidation)) {
      this.setState({ btnEnabler: false });
    } else { this.setState({ btnEnabler: true }); }
  }

  render() {
    const { email, password, btnEnabler } = this.state;
    return (
      <div>
        <header>Faça o Login</header>
        <section>
          <input
            type="email"
            placeholder="digite seu email"
            data-testid="email-input"
            onChange={ ({ target: { value } }) => {
              this.setState({ email: value });
              this.inputsValidation();
            } }
            value={ email }

          />
          <input
            type="password"
            placeholder="digite sua senha"
            data-testid="password-input"
            onChange={ ({ target: { value } }) => {
              this.setState({ password: value });
              this.inputsValidation();
            } }
            value={ password }

          />
          <button
            type="submit"
            onClick={ () => firstDispatch(email,
              password) }
            disabled={ btnEnabler }
          >
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

export default Login;
