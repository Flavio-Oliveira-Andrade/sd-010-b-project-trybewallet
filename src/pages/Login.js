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
    this.emailChecker = this.emailChecker.bind(this);
    this.passChecker = this.passChecker.bind(this);
    this.test = this.test.bind(this);
  }

  // https://www.w3schools.com/jsref/jsref_regexp_test.asp
  // ajuda do Zambs pra entender Regex e criar o Regex

  emailChecker({ target: { value } }) {
    const emailFormat = RegExp(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/);
    if (emailFormat.test(value)) {
      this.setState({
        email: value,
      });
    }
  }

  passChecker({ target: { value } }) {
    const six = 6;
    if (value.length >= six) {
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
          onChange={ this.emailChecker }
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          onChange={ this.passChecker }
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
