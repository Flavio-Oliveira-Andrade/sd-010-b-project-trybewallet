import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    // this.buttonDisable = this.buttonDisable.bind(this);
    this.validPassword = this.validPassword.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.buttonEnable = this.buttonEnable.bind(this);

    this.state = {
      // buttonDisable: true,
      validEmail: false,
      validPassword: false,
    };
  }

  // buttonDisable(e) {
  //   const re = /\S+@\S+\.\S+/;
  //   const email = e.target.value;
  //   const validEmail = re.test(email);
  //   console.log(re.test(email));

  //   const password = e.target.value.length;
  //   const NUMBER_CARACTER = 5;
  //   console.log(password > NUMBER_CARACTER);

  //   if (password > NUMBER_CARACTER && validEmail) {
  //     this.setState({
  //       buttonDisable: false,
  //     });
  //   }
  // }
  validEmail(e) {
    const re = /\S+@\S+\.\S+/;
    const email = e.target.value;
    const validEmail = re.test(email);
    if (validEmail === true) {
      this.setState({
        validEmail: true,
      });
    }
  }

  validPassword(e) {
    const password = e.target.value;
    const NUMBER_CARACTER = 5;
    if (password.length > NUMBER_CARACTER) {
      this.setState({
        validPassword: true,
      });
    }
  }

  buttonEnable() {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  }

  render() {
    // const { validEmail, validPassword } = this.state;

    // if (validEmail && validPassword) {
    //   this.teste();
    // }

    return (
      <form action="">
        <h1>Login</h1>
        <input
          onChange={ this.validEmail }
          type="email"
          data-testid="email-input"
          placeholder="E-mail"
        />
        <input
          onChange={ this.validPassword }
          type="password"
          data-testid="password-input"
          placeholder="Senha"
        />
        <Link to="/carteira"><button type="button" disabled={ this.buttonEnable() }>Entrar</button></Link>
      </form>
    );
  }
}

export default Login;
