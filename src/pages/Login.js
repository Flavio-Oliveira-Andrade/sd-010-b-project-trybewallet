import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// https://cursos.alura.com.br/forum/topico-como-validar-email-e-senha-em-javascript-80469
// Usado essa fonte para conhecimento em regex
const validForm = (email, password) => {
  const SEIS = 6;
  const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  const button = document.querySelector('button');
  if ((regex.test(email)) && (password.length >= SEIS)) {
    button.disabled = false;
  } else { button.disabled = true; }
};

class Login extends React.Component {
  componentDidMount() {
    const { email, password } = this.props;
    validForm(email, password);
  }

  componentDidUpdate() {
    const { email, password } = this.props;
    validForm(email, password);
  }

  render() {
    const { setUserEmail, setUserPassword } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              onChange={ (e) => setUserEmail(e.target.value) }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              data-testid="password-input"
              onChange={ (e) => setUserPassword(e.target.value) }
            />
          </label>
          <Link to="/carteira">
            <button
              type="submit"
              data-testid="my-action"
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUserEmail: PropTypes.func.isRequired,
  setUserPassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ // LER
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  setUserEmail: (email) => dispatch({
    type: 'EMAIL',
    email,
  }),
  setUserPassword: (password) => dispatch({
    type: 'PASSWORD',
    password,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
