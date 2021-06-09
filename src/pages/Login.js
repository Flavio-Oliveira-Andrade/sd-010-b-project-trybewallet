import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { actionEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // isValided: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleValid = this.handleValid.bind(this);
  }

  // handleValid() {
  //   const { email } = this.state;

  //   if (email.match(/((\w+)@(\w+)\.(\w+))/i)) {
  //     this.setState({
  //       isValided: true,
  //     });
  //   }
  // }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { user } = this.props;
    const { email, password } = this.state;
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

    return (
      <div>
        <form onSubmit={ (e) => e.preventDefault() }>
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
            onClick={ () => <Redirect to="/Carteira" /> }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (email) => dispatch(actionEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
