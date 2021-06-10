import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import emailOnChange from '../actions/userAction';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      btnDisable: true,
    };

    this.check = this.check.bind(this);
    this.checkButton = this.checkButton.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(email) {
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    return re.test(email);
  }

  checkButton() {
    const { password } = this.state;
    const { email } = this.props;
    const SENHA_MAIOR_6 = 5;
    if (this.validateEmail(email) && password.length >= SENHA_MAIOR_6) {
      this.setState({ btnDisable: false });
    }
  }

  check({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
    this.checkButton();
  }

  render() {
    const { btnDisable } = this.state;
    const { emailChange } = this.props;
    return (
      <form>
        <input
          id="email"
          type="email"
          data-testid="email-input"
          // onChange={ this.check }
          onChange={ ({ target: { value } }) => emailChange(value) }
        />
        <input
          id="password"
          type="password"
          data-testid="password-input"
          min="6"
          onChange={ this.check }
        />
        <Link to="/carteira">
          <button type="button" id="login" disabled={ btnDisable }>Entrar</button>
        </Link>
      </form>
    );
  }
}
Login.propTypes = {
  emailChange: PropTypes.func,
  email: PropTypes.string,
};
Login.defaultProps = {
  emailChange: () => {},
  email: '',
};
const mapDispatchToProps = (dispatch) => ({
  emailChange: (email) => dispatch(emailOnChange(email)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
