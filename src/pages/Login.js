import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisable: true,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputsCheck = this.inputsCheck.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  inputsCheck() {
    const { email, password } = this.state;
    const emailCheck = /\S+@\S+\.\S+/;
    const passwordCheck = 5;
    if (emailCheck.test(email) && password.length >= passwordCheck) {
      this.setState({
        isDisable: false,
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.type]: event.target.value,
    });
    this.inputsCheck();
  }

  handleRedirect(email) {
    const { setEmail } = this.props;
    setEmail(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { isDisable, email, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div>
        <div>Login</div>
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ isDisable }
          onClick={ () => this.handleRedirect(email) }
        >
          Entrar

        </button>

      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (value) => dispatch(addEmail(value)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

// Source https://pt.stackoverflow.com/questions/369892/como-redirecionar-para-uma-rota-usando-onclick-e-react-router
