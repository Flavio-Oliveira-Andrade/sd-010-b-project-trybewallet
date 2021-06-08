import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { addEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValue = this.handleValue.bind(this);

    this.state = {
      email: '',
      password: '',
      disable: true,
      redirect: false,
    };
  }

  handleEmailVerify() {
    const { email } = this.state;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) return true;
  }

  handleValue({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { addEmailUser } = this.props;
    addEmailUser(email);
    this.setState({ redirect: true });
  }

  render() {
    const { disable, email, password, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    const num = 5;

    console.log(password);

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email">
            Email
            <input
              value={ email }
              name="email"
              id="email"
              type="email"
              data-testid="email-input"
              onChange={ this.handleValue }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              value={ password }
              name="password"
              id="password"
              type="password"
              data-testid="password-input"
              onChange={ this.handleValue }
            />
          </label>
          <button
            disabled={
              password.length <= num || (!this.handleEmailVerify() && disable)
            }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  addEmailUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.email,
});

const mapDispatchToProps = (dispatch) => ({
  addEmailUser: (email) => dispatch(addEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
