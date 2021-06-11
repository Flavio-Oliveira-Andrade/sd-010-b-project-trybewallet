import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import addEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: true,
      forcedRender: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  verifyInputs({ target: { value, name } }) {
    const { forcedRender } = this.state;
    this.setState({ forcedRender: forcedRender + 1 });
    if (name.includes('email')) {
      this.setState({ email: value });
    } else { this.setState({ password: value }); }
    this.handleChange();
  }

  handleChange() {
    const { email, password } = this.state;
    const magicNumber = 5;
    if (email.includes('.com') && password.length >= magicNumber) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  loginUser() {
    const { email } = this.state;
    const { payLoad } = this.props;
    payLoad(email);
  }

  render() {
    const { disable } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="input-email" id="email">
            Email
            <input
              data-testid="email-input"
              onChange={ this.verifyInputs }
              type="text"
              name="input-email"
              id="input-email"
            />
          </label>
          <label htmlFor="input-password">
            Senha
            <input
              data-testid="password-input"
              onChange={ this.verifyInputs }
              type="password"
              id="input-password"
              name="input-password"
            />
          </label>
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ disable }
              onClick={ this.loginUser }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  payLoad: (email) => dispatch(addEmail(email)),
});

Login.propTypes = {
  payLoad: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
