import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { action } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.checker = this.checker.bind(this);
    this.redirects = this.redirects.bind(this);
    this.saveMe = this.saveMe.bind(this);

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
      redirect: false,
    };
  }

  checker() {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const noMagicNumbers = 5;
    if (regex.test(email) && password.length >= noMagicNumbers) {
      this.setState({
        isDisabled: false,
      });
    }
  }

  changeHandler(event) {
    this.setState({
      [event.target.type]: event.target.value,
    });
    this.checker();
  }

  saveMe(event) {
    event.preventDefault();
    const { myDispatch } = this.props;
    const { email, passwd } = this.state;
    if (email && passwd) {
      myDispatch({ type: 'LOGIN', payload: email });
      this.setState({ redirect: true });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  redirects(email) {
    const { myDispatch } = this.props;
    myDispatch(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { isDisabled, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div>
        <div>Login</div>
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          onChange={ this.changeHandler }
        />
        <input
          type="password"
          placeholder="Senha"
          data-testid="password-input"
          onChange={ this.changeHandler }
        />
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.saveMe }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (propSender) => ({
  myDispatch: (value) => propSender(action(value)),
});

Login.propTypes = {
  myDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
