import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { emailOnChange } from '../actions/userAction';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const SixNumber = 6;
    const { password } = this.state;
    const { actionEmail, email } = this.props;
    const validEmailandPassword = (password.length >= SixNumber)
    && RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
    return (
      <div>
        <label htmlFor="emailLogin">
          Email
          <input
            data-testid="email-input"
            id="emailLogin"
            type="email"
            onChange={ ({ target: { value } }) => actionEmail(value) }
          />
        </label>
        <label htmlFor="passwordLogin">
          Password
          <input
            data-testid="password-input"
            id="passwordLogin"
            type="password"
            onChange={ this.handleChange }
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

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
