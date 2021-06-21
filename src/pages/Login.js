import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loginUser from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isValidMail: false,
      isValidPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.mailAndNameValidation = this.mailAndNameValidation.bind(this);
  }

  componentDidUpdate(_, prevState) {
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.mailAndNameValidation();
    }
  }

  // função usada no trabalho em grupo;
  mailAndNameValidation() {
    const passwordMin = 6;
    const { email, password } = this.state;
    this.setState({
      isValidMail: email.match(/[a-z]+@[a-z]+.com/g),
      isValidPassword: password.length >= passwordMin,
    });
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { email, isValidMail, isValidPassword } = this.state;
    const { login } = this.props;
    return (
      <div>
        <section>
          <input
            type="email"
            id="email"
            placeholder="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            required
          />
          <input
            type="password"
            id="password"
            onChange={ this.handleChange }
            placeholder="senha"
            data-testid="password-input"
            required
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ !(isValidMail && isValidPassword) }
              onClick={ () => login(email) }
            >
              Entrar
            </button>
          </Link>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginUser(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
