import React from 'react';
import './login.css';

const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const regexPassword = /[\w]{6}/;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false,
      isDisabled: true,
    };
    this.updateStateAndValidateInput = this.updateStateAndValidateInput.bind(this);
  }

  componentDidUpdate(_, prevState) {
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.isDisabledButton();
    }
  }

  isDisabledButton() {
    const { emailIsValid, passwordIsValid } = this.state;
    if (emailIsValid && passwordIsValid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  updateStateAndValidateInput({ target: { name, value } }) {
    if (name === 'email') {
      const isValid = regexEmail.test(value);
      this.setState({ emailIsValid: isValid });
    }

    if (name === 'password') {
      const isValid = regexPassword.test(value);
      this.setState({ passwordIsValid: isValid });
    }

    this.setState({ [name]: value });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div className="form-login">
        <form>
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.updateStateAndValidateInput }
            placeholder="Digite seu email"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.updateStateAndValidateInput }
            placeholder="Digite seu senha"
            data-testid="password-input"
          />
          <button type="button" disabled={ isDisabled }>Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;

// Referências
// conteudo sobre componentDidUpdate: https://medium.com/@ashleywnj/componentdidupdate-prevstate-prevprops-and-a-silly-mistake-38afc72f5abc
// expressão regular Email: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
// expressão regular Passowrd: https://regexone.com/
