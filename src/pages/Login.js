import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
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

const redirectPageCarteira = () => <Redirect to="/carteira" />;

class Login extends React.Component {
  componentDidMount() {
    const { email, password } = this.props;
    validForm(email, password);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              // onChange={}
              data-testid="email-input"
              onBlur={ validForm }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              data-testid="password-input"
              onBlur={ validForm }
              // onChange={}
            />
          </label>
          <button
            type="submit"
            data-testid="my-action"
            onClick={ redirectPageCarteira }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ // LER
  email: state.user.user.email,
  password: state.user.user.password,
});

export default connect(mapStateToProps)(Login);
