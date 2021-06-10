import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import userInput from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      buttonAble: false,
      isValid: false,
    };

    this.validation = this.validation.bind(this);
    this.catchEmail = this.catchEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const button = document.querySelector('.login-button');
    // console.log(button);
    button.disabled = true;
  }

  validation() {
    const button = document.querySelector('.login-button');
    const login = document.querySelectorAll('input');
    const email = login[0].value;
    this.setState({
      email,
    });
    // console.log(email);
    const lenghtPassword = 6;
    if (login[0].value.includes('@')
    && login[0].value.includes('.com')
    && login[1].value.length >= lenghtPassword) {
      const { state: { isValid: value } } = this;
      button.disabled = false;
      this.setState({ isValid: value });
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  catchEmail() {
    const { email } = this.state;
    const { emailDispatch } = this.props;
    emailDispatch(email);
    this.setState({
      buttonAble: true,
    });
  }

  render() {
    const { buttonAble } = this.state;
    return (
      <form>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            data-testid="email-input"
            className="login-input"
            onChange={ (e) => { this.validation(); this.handleChange(e); } }
            required
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.validation }
            required
          />
        </label>
        <button
          className="login-button"
          type="button"
          onClick={ this.catchEmail }
        >
          Entrar
        </button>
        {(buttonAble) && <Redirect to="/carteira" />}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(userInput(email)),
});

// const mapStateToProps = (state) => ({
//   email: state.user.email,
// });

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
