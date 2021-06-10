import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';

import '../css/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isBtnDisable: true,
    };

    this.checkValidation = this.checkValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  checkValidation() {
    const emailCheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const { email, password } = this.state;
    const SIX_LETTERS = 6;

    const isValid = password.length >= SIX_LETTERS && email.match(emailCheck);

    this.setState({
      isBtnDisable: !isValid,
    });
  }

  handleChange(event) {
    const { target: { name, value } } = event;

    this.setState({
      [name]: value,
    }, this.checkValidation);
  }

  render() {
    const { handleChange } = this;
    const { setUserEmail, history } = this.props;
    const { email, isBtnDisable } = this.state;

    return (
      <div className="box">
        <div className="login">
          <div className="img">
            <img src="" alt="" />
          </div>
          <section className="inputs">
            <input
              name="email"
              type="text"
              onChange={ (handleChange) }
              placeholder="email"
              data-testid="email-input"
            />
            <input
              name="password"
              type="password"
              minLength="6"
              onChange={ handleChange }
              placeholder="senha"
              data-testid="password-input"
            />
          </section>
          <div className="link">
            <button
              id="btn"
              type="button"
              disabled={ isBtnDisable }
              onClick={ () => (setUserEmail(email) && history.push('/carteira')) }
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserEmail: (email) => (dispatch(login(email))),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  setUserEmail: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};
