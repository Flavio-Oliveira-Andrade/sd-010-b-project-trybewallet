import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isValidEmail: false,
      isValidSenha: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
  }

  handleChangeEmail({ target: { value } }) {
    this.setState({
      email: value,
    });
    // if (value.match(/[a-z]+@[a-z]+.com/g)) {
    //   this.setState({ isValidEmail:  });
    // }
    this.setState({ isValidEmail: value.match(/[a-z]+@[a-z]+.com/g) });
  }

  handleChangeSenha({ target: { value } }) {
    const minLength = 6;
    // if (value.length >= minLength) {
    //   this.setState({ isValidSenha: true });
    // } else {
    //   this.setState({ isValidSenha: false });
    // }
    this.setState({ isValidSenha: value.length >= minLength });
  }

  render() {
    const { email, isValidEmail, isValidSenha } = this.state;
    const enable = isValidEmail && isValidSenha;
    console.log(email);
    return (
      <div className="App">
        <header>
          <h2>Hello, TrybeWallet!</h2>
        </header>
        <main>
          <h3>Faça seu Login!</h3>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              placeholder="Email"
              data-testid="email-input"
              onChange={ this.handleChangeEmail }
            />
          </label>
          <br />
          <label htmlFor="senha">
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              data-testid="password-input"
              onChange={ this.handleChangeSenha }
            />
          </label>
          <button type="button" disabled={ !enable }>Entrar</button>
        </main>
      </div>
    );
  }
}

export default Login;
