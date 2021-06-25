import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { userAction } from '../actions/index';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.clicked = this.clicked.bind(this);

    this.state = {
      email: '',
      validPassword: false,
      validEmail: false,
      shouldRedirect: false,
    };
  }

  handleEmail({ value }) {
    if (value.match(/[a-z]+@[a-z]+.com/g)) {
      this.setState({
        validEmail: true,
      });
    } else {
      this.setState({
        validEmail: false,
      });
    }

    this.setState({
      email: value,
    });
  }

  handlePassword({ value }) {
    const MIN_SIZE_PASSWORD = 6;
    if (value.length >= MIN_SIZE_PASSWORD) {
      this.setState({
        validPassword: true,
      });
    } else {
      this.setState({
        validPassword: false,
      });
    }
  }

  clicked() {
    const { email } = this.state;
    const { saveEmail } = this.props;
    saveEmail(email);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { validEmail, validPassword, shouldRedirect } = this.state;
    return (
      <section>
        <form>
          <input
            type="email"
            data-testid="email-input"
            onChange={ ({ target }) => this.handleEmail(target) }
          />
          <input
            type="password"
            data-testid="password-input"
            onChange={ ({ target }) => this.handlePassword(target) }
          />
          <button
            type="button"
            disabled={ !validEmail || !validPassword }
            onClick={ this.clicked }
          >
            Entrar
          </button>
        </form>
        { shouldRedirect && <Redirect to="/carteira" /> }
      </section>
    );
  }
}

LoginPage.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
