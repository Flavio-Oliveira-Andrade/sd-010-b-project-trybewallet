import React from 'react';

class Login extends React.Component {
  /* constructor(props) {
    super(props);
    this.state = {
      valido: false,
    };
  } */

  /* validarEmail = (e) => {
    e.preventDefault();

  } */

  render() {
    /* const { valido } = this.state; */
    return (
      <>
        <div>Login</div>
        <input data-testid="email-input" />
        <input data-testid="password-input" />
      </>
    );
  }
}

export default Login;
