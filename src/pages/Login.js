import React from 'react';

class Login extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     email: '',
  //   };
  // }

  handleSubmit(target) {
    const targetResult = target;
    console.log(targetResult);
  }

  render() {
    return (
      <form onSubmit={ () => this.handleSubmit() }>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            name="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            name="password"
            placeholder="Senha"
          />
        </label>
        <button type="submit">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
