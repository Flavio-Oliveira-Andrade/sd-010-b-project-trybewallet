import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.validation = this.validation.bind(this);
    this.state = {
      email: '',
    };
  }

  componentDidMount() {
    const button = document.querySelector('.loginButton');
    button.disabled = true;
  }

  validation() {
    const button = document.querySelector('.loginButton');
    const input = document.querySelectorAll('input');
    const email = input[0].value;
    this.setState({
      email,
    });
    if (input[0].value.includes('@') && input[0].value.includes('.com')) {
      const CARAC = 6;
      if (input[1].value.length >= CARAC) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    } else {
      button.disabled = true;
    }
  }
  // refazer esse if!!! ver no plantãoq
  // ref:

  render() {
    const { dispatchEmail } = this.props;
    const { email } = this.state;
    return (
      <div>
        <input
          type="email"
          onChange={ this.validation }
          data-testid="email-input"
          placeholder="alguem@alguem.com"
          required
        />
        <input
          type="password"
          onChange={ this.validation }
          minLength="6"
          data-testid="password-input"
          required
        />
        <Link to="/carteira">
          <button
            type="button"
            className="loginButton"
            onClick={ () => dispatchEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
};
