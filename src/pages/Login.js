import React from 'react';
// import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    // this.validarEmail = this.validarEmail.bind(this);

    this.state = {
      // email: '',
      // buttonState: false
    };
  }

  // validarEmail(e) {
  //   const SIX = 6;
  //   const emailRegex = /\S+@\S+\.\S+/;
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value.length;
  //   if (password.length >= SIX) {
  //     this.setState({ buttonState: true });
  //   }
  //   if (email === emailRegex) {
  //     this.setState({ buttonState: true});
  //   }
  // }

  // redirect() {
  //   return <Redirect from="/carteira" />;
  // }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              data-testid="email-input"
              name="email"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              data-testid="password-input"
              name="password"
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
