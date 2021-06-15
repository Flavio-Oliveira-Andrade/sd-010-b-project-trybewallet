import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from '../actions';

// Fontes:
// - https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
// - https://github1s.com/tryber/sd-10b-live-lectures/blob/lecture/16.5/students-register/src/pages/Login.js
// - https://github.com/gabriellukke/plantao-revisao-redux-bloco-16/blob/with-redux-B/src/redux/reducers/index.js

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const sizePass = 6;
    const { email, password } = this.state;
    const { login } = this.props;
    const passwordCheck = password.length >= sizePass;
    const emailCheck = RegExp(/^[\w+.]+@\w+\.\w{2,}?$/).test(email);
    return (
      <div className="media">
        <form className="box">
          <label className="label" htmlFor="email-input">
            Email:
            <input
              className="input control"
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              onChange={ (event) => {
                this.handleChange(event);
              } }
            />
          </label>
          <label className="label" htmlFor="password-input">
            Senha:
            <input
              className="input control"
              data-testid="password-input"
              name="password"
              value={ password }
              type="password"
              onChange={ (event) => {
                this.handleChange(event);
              } }
            />
          </label>
          <Link to="/carteira">
            <button
              // className="button is-primary"
              disabled={ !passwordCheck || !emailCheck }
              onClick={ () => { login(email); } }
              type="button"
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
