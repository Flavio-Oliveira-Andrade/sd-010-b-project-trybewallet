import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      email: '',
      senha: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  isDisable() {

  }

  validate() {
    const { email, senha } = this.state;
    const PASSWORD_LENGHT = 6;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email) && senha.length >= PASSWORD_LENGHT) {
      return false;
    }

    return true;
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              type="text"
              name="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <br />
          <label htmlFor="senha">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              name="senha"
              onChange={ this.handleChange }
              value={ senha }
            />
          </label>
          <br />
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ this.validate() }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
