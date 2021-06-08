import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
    this.validacao = this.validacao.bind(this);
  }

  submit() {
    console.log('passando');
    // this.setState({
    //   email: 'disabled',
    // });
  }

  validacao() {
    const button = document.querySelector('.loginButton');
    const targ = document.querySelectorAll('input');
    if (targ[0].value.includes('@') && targ[0].value.includes('.com')) {
      const CARAC = 6;
      if (targ[1].value.length >= CARAC) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    } else {
      button.disabled = true;
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={ this.validacao }
          type="email"
          data-testid="email-input"
          required
        />
        <input
          onChange={ this.validacao }
          type="password"
          data-testid="password-input"
          required
        />
        <button className="loginButton" type="submit" disabled onClick={ this.submit }>
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
