import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.validacao = this.validacao.bind(this);
    this.state = {
      email: '',
    };
  }

  componentDidMount() {
    const button = document.querySelector('.loginButton');
    button.disabled = true;
  }

  validacao() {
    const button = document.querySelector('.loginButton');
    const targ = document.querySelectorAll('input');
    const email = targ[0].value;
    this.setState({
      email,
    });
    if (targ[0].value.includes('@') && targ[0].value.includes('.com')) {
      const CARAC = 6;
      if (targ[1].value.length >= CARAC) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    } else {
      button.disabled = true;
    }
  }

  render() {
    const { dispatchEmail } = this.props;
    const { email } = this.state;
    return (
      <div>
        <input
          onChange={ this.validacao }
          type="email"
          data-testid="email-input"
          required
        />
        <input
          onChange={ this.validacao }
          type="password"
          data-testid="password-input"
          required
        />
        <Link to="/carteira">
          <button
            className="loginButton"
            type="button"
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
