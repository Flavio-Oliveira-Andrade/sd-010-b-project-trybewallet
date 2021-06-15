import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import emailOnChange from '../actions/userAction';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, keyState) {
    this.setState({ [keyState]: event.target.value });
  }

  render() {
    const SixNumber = 6;
    const { password, email } = this.state;
    const { actionEmail } = this.props;
    // como a action é uma função que recebe um email
    // preciso passar este email
    actionEmail(email);
    // se password && teste do regex retorna true
    // o botao de submit é habilitado
    const validEmailandPassword = (password.length >= SixNumber)
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    && RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
    return (
      <div>
        <label htmlFor="emailLogin">
          Email
          <input
            data-testid="email-input"
            id="emailLogin"
            type="email"
            onChange={ (event) => this.handleChange(event, 'email') }
          />
        </label>
        <label htmlFor="passwordLogin">
          Password
          <input
            data-testid="password-input"
            id="passwordLogin"
            type="password"
            onChange={ (event) => this.handleChange(event, 'password') }
          />
        </label>
        <Link to="/carteira"><button type="submit" disabled={ !validEmailandPassword }>Entrar</button></Link>
      </div>
    );
  }
}
// tudo que está dentro do mapDispatchToProps é uma função!!
const mapDispatchToProps = (dispatch) => ({
  actionEmail: (email) => dispatch(emailOnChange(email)),
});

export default connect(null, mapDispatchToProps)(Login);
