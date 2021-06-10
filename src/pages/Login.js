import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    // const { login } = this.props;
    return (
      <div className="Login">
        <section className="login-inputs">
          <input
            type="text"
            onChange={ ({ target }) => this.setState({ email: target.value }) }
            placeholder="email"
            data-testid="email-input"
          />
          <input
            type="password"
            onChange={ ({ target }) => this.setState({ email: target.value }) }
            placeholder="senha"
            data-testid="password-input"
          />
        </section>
        <section className="link">
          <Link
            to="/carteira"
            onClick={ () => login({ email, password }) }
          >
            Entrar
          </Link>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (event) => dispatch(loginAction(event)),
});

export default connect(null, mapDispatchToProps)(Login);
