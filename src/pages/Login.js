import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { adicionarUsuario } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.validarFormulario = this.validarFormulario.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validarFormulario() {
    const { email, password } = this.state;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const seisCaracteres = 6;
    if ((emailRegex.test(email)) && (password.length > seisCaracteres)) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    if (name === 'email') {
      this.setState({ email: value }, this.validarFormulario);
    }
    if (name === 'password') {
      this.setState({ password: value }, this.validarFormulario);
    }
  }

  render() {
    const { disabled, email } = this.state;
    const { adicionarUsuarioState } = this.props;
    return (
      <section>
        <div>Tela de Login</div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              data-testid="password-input"
              seisCaracteres="6"
              onChange={ this.handleChange }
              required
            />
          </label>
        </form>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => adicionarUsuarioState(email) }
          >
            Entrar
          </button>
        </Link>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  adicionarUsuarioState: (email) => dispatch(adicionarUsuario(email)),
});

Login.propTypes = {
  adicionarUsuarioState: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
