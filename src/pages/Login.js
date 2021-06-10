import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actionUser from '../actions/actionUser';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      validEmail: false,
      validPass: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail({ target: { value } }) {
    this.setState({
      email: value,
    });
    this.setState({ validEmail: value.match(/[a-z]+@[a-z]+.com/g) });
  }

  handleChangePassword({ target: { value } }) {
    const min = 6;

    // atribui valor diretamente do estado
    this.setState({ validPass: value.length >= min });
  }

  render() {
    const { keyEmail } = this.props;
    const { validEmail, validPass, email } = this.state;
    const enable = validEmail && validPass;
    return (
      <div>
        <h2> Login TrybeWallet </h2>
        <br />
        <label htmlFor="email-input">
          Email:
          {/* {' '} */}
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChangeEmail }
          />
        </label>
        <br />
        <label htmlFor="email-input">
          Senha:
          {/* {' '} */}
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChangePassword }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !enable }
            onClick={ () => keyEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  keyEmail: (email) => dispatch(actionUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);
