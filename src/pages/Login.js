import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginSubmit } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(_, prevState) {
    // pelo onChange seria mais fácil, mas fiz só pra provar que dá pra contornar o loop infinito nesse caso =P
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    const { email, password } = this.state;
    const minimalPasswordLength = 6;
    const validator = /\S+@\S+\.\S+/gi;
    if (password.length >= minimalPasswordLength && email.match(validator)) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
    // regex baseado daqui: https://regexr.com/3e48o
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    const { loginSubmitAction, emailNotEmpty } = this.props;
    if (emailNotEmpty !== '') {
      return <Redirect to="/carteira" />;
    }
    return (
      <form>
        <label htmlFor="id-email">
          Email
          <input
            data-testid="email-input"
            id="id-email"
            type="email"
            value={ email }
            onChange={ this.handleChange }
            name="email"
          />
        </label>
        <label htmlFor="id-senha">
          Senha
          <input
            data-testid="password-input"
            id="id-senha"
            type="password"
            value={ password }
            onChange={ this.handleChange }
            name="password"
          />
        </label>
        <button
          type="button"
          disabled={ isDisabled }
          id="btn"
          onClick={ () => loginSubmitAction(email) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginSubmitAction: (email) => dispatch(loginSubmit(email)),
});

const mapStateToProps = (state) => ({
  emailNotEmpty: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  loginSubmitAction: PropTypes.func.isRequired,
  emailNotEmpty: PropTypes.string.isRequired,
};
