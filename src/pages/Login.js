import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import action from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.test = this.test.bind(this);
  }

  // https://www.w3schools.com/jsref/jsref_regexp_test.asp

  validateEmail({ target: { value } }) {
    const validFormat = RegExp(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/);
    if (validFormat.test(value)) {
      this.setState({
        email: value,
      });
    }
  }

  validatePassword({ target: { value } }) {
    const THREE = 3;
    if (value.length >= THREE) {
      this.setState({
        password: value,
      });
    }
  }

  test() {
    let status = false;
    const { email, password } = this.state;
    if (email && password) {
      status = false;
    } else {
      status = true;
    }
    return status;
  }

  render() {
    const { email, password } = this.state;
    const { username } = this.props;
    return (

      <div>
        <h1>Login</h1>

        <input
          type="text"
          name="email"
          onChange={ this.validateEmail }
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          onChange={ this.validatePassword }
          data-testid="password-input"
        />
        <Link to="/carteira" onClick={ () => username({ email, password }) }>
          <button type="button" disabled={ this.test() }>Entrar</button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  username: (values) => dispatch(action(values)),
});

Login.propTypes = ({
  username: PropTypes.function,
}).isRequired;

export default connect(null, mapDispatchToProps)(Login);
