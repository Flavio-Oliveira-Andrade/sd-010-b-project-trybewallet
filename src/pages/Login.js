import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: [],
      // senha: [],
    };
  }

  isDisable() {

  }

  validate() {

  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input data-testid="email-input" type="text" name="email" />
          </label>
          <label htmlFor="name">
            Nome:
            <input data-testid="password-input" type="password" name="senha" />
          </label>
          <Link to="/carteira">
            <button
              type="submit"
              // disabled={ }
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
