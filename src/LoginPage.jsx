import React from 'react';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      email: '',
      buttonDisabled: true,
    };
  }

  handleInput({ value }) {
    const email = value;
    this.setState({
      email,
    });
  }

  goToWallet() {

  }

  render() {
    const { buttonDisabled } = this.state;
    return (
      <section>
        <form>
          <input
            type="email"
            data-testid="email-input"
            onChange={ ({ target }) => this.handleInput(target) }
          />
          <input
            type="password"
            data-testid="password-input"
          />
          <button type="button" disabled={ buttonDisabled } onClick={ this.goToWallet }>
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default LoginPage;
