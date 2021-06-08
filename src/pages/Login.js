import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      login: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleValidateEmail = this.handleValidateEmail.bind(this);
    this.handleValidatePassword = this.handleValidatePassword.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleValidateEmail() {
    const { email } = this.state;
    return (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email));
  }

  handleValidatePassword() {
    const { password } = this.state;
    return (/[a-z0-9._%+-]{6}/.test(password));
  }

  handleClick() {
    const { propSetEmail } = this.props;
    const { email } = this.state;
    propSetEmail(email);
    this.setState({
      login: true,
    });
  }

  render() {
    const { email, password, login } = this.state;
    if (login) return <Redirect to="/carteira" />;
    return (
      <main className="App-header">
        <div>
          <label htmlFor="email-input">
            E-mail:
            <input
              type="text"
              id="email-input"
              name="email"
              value={ email }
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password-input">
            Senha:
            <input
              type="text"
              id="password-input"
              name="password"
              value={ password }
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ !(this.handleValidateEmail() && this.handleValidatePassword()) }
          >
            Entrar
          </button>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  propSetEmail: func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  propSetEmail: (email) => dispatch(setEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
