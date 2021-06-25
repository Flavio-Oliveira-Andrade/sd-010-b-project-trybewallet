import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailChange } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
      login: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    const { handleEmail } = this.props;
    const { email } = this.state;

    this.setState({ login: true });

    handleEmail(email);
  }

  handleChange({ target }) {
    this.setState(
      {
        [target.name]: target.value,
      },
      () => {
        this.loginValidation();
      },
    );
  }

  loginValidation() { // função que validará o e-mail
    const { email, password } = this.state;
    let disabled = false;
    const EMAIL_VALIDATION = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    const MIN_PASSWORD_LENGTH = 6;
    disabled = !(EMAIL_VALIDATION.test(email) && password.length >= MIN_PASSWORD_LENGTH);
    this.setState({ disabled });
  }

  render() {
    const { email, password, disabled, login } = this.state;
    return (

      <main className="login-main">
        <form className="login-form">
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
            placeholder="user@email.com"
            className="login-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
            placeholder="******"
            className="login-input"
          />
          <button
            type="submit"
            disabled={ disabled }
            onClick={ this.handleClick } // logica que enviará para o informações para o reducers
            className="login-btn"
          >
            Entrar
          </button>
        </form>
        {login ? <Redirect to="/carteira" /> : ''}
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ // função que retornará um bojeto
  handleEmail: (value) => dispatch(emailChange(value)),
  // mapeando dispatch para uma prop (handleEmail)
});

Login.propTypes = {
  handleEmail: PropTypes.func.isRequired,
  // handleEmail sendo retornada na handleClick
};

export default connect(null, mapDispatchToProps)(Login);
// exportando a função connect que retorna outra função e esta é chamada em seguida
