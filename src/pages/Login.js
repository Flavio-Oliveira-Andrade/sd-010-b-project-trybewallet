import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { actionEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isRedirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { email } = this.state;
    const { user } = this.props;

    user(email);

    this.setState({
      isRedirect: true,
    });
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, isRedirect } = this.state;
    // Valida email. Detalhe! Eu tentei de várias formas fazer a validação do email com regex que encontrei na internet e até mesmo no plantão, porém não deu certo, então vi no repo do colega Henrique Clementino a sua fórmula do regex (email.match(/((\w+)@(\w+)\.(\w+))/i), unicamente. Link: https://github.com/tryber/sd-010-b-project-trybewallet/pull/13/commits/fe865497b5e72890104811ccd5edd70fe006494e.
    let isEmail = '';
    if (email.match(/((\w+)@(\w+)\.(\w+))/i)) {
      isEmail = true;
    }
    // Valida password:
    const MAGIC_NUMBER = 5;
    let isPassword = '';
    if (password.length > MAGIC_NUMBER) {
      isPassword = true;
    }

    if (isRedirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="text"
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            disabled={ isEmail === '' || isPassword === '' }
            onClick={ () => this.handleSubmit() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  user: (email) => dispatch(actionEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
