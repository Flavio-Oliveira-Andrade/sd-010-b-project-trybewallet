import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    const emailValido = email.match(/^[^ ]+@[^ ]+.[a-z]{2,3}$/);
    return (
      <form>
        <label htmlFor="email">
          E-mail:
          <input type="email" id="email" onChange={ this.handleChange } />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            maxLength="12"
            onChange={ this.handleChange }
          />
        </label>
        {/* {(email) ? button.on : button.offline } */}
        <button
          type="button"
          disabled={ !emailValido || password.length <= '5' }
        >
          Entrar

        </button>
      </form>
    );
  }
}
// creditto a Antenor Zapata;
export default Login;
