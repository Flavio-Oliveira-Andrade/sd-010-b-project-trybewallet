import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.habilitarButton = this.habilitarButton(this);

    this.state = {
      email: '',
      password: '',
      button: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
    habilitarButton();
  }

  habilitarButton(){
    const { email, password, button } = this.state;
    const teste = email + password;
  }

  render() {
    const { handleChange } = this;
    const { email, password, button } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ handleChange }
          />
          <div>
            <button type="button" disabled={ button }>Entrar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
