import PropTypes from "prop-types";
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// function ValidarEmail (email) {
//   var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
//    return emailPattern.test(email);
// }
// console.log('teste');
// console.log(ValidarEmail('teste@teste@teste.com'));
// console.log(ValidarEmail('teste@teste.com'));
// console.log(ValidarEmail('teste@.teste.com.br'));

const validForm = (ola) => {
  console.log(ola);
  const SEIS = 6;
  const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const button = document.querySelector('button');
  if ((regex.test(email)) && (password.length >= SEIS)) {
    button.disabled = true;
  } else { button.disabled = true; }
};

const redirectPageCarteira = () => <Redirect to="/carteira" />;

class Login extends React.Component {
  componentDidMount() {
    const { ola } = this.props;
    validForm(ola);
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
  ola: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ // LER
  ola: state.user.user.email,
});

export default connect(mapStateToProps)(Login);
