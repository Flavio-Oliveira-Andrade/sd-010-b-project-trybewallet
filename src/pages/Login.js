import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { validateEmail } from '../services';
import { redirectCarteira } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invalidEmail: true,
      invalidPassword: true,
      input: '',
      pass: '',
      shouldRedirect: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleRedirectCarteira = this.handleRedirectCarteira.bind(this);
  }

  handlePassChange(e) {
    const extensaoSenha = 5;
    this.setState({
      pass: e.target.value,
    },
    () => {
      const { pass } = this.state;
      if (pass.length > extensaoSenha) {
        this.setState({
          invalidPassword: false,
        });
      }
    });
  }

  handleEmailChange(e) {
    this.setState({
      input: e.target.value,
    });

    if (validateEmail(e.target.value)) {
      this.setState({
        invalidEmail: false,
      });
    }
  }

  handleRedirectCarteira() {
    const { input } = this.state;
    const {dispatchUserLogin} = this.props;
    dispatchUserLogin(input);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { invalidEmail, invalidPassword, input, shouldRedirect } = this.state;
    const valid = invalidEmail || invalidPassword;

    const componente = (
      <div>
        <input
          data-testid="email-input"
          type="email"
          onChange={ this.handleEmailChange }
          value={ input }
        />
        <input
          data-testid="password-input"
          type="password"
          onChange={ this.handlePassChange }
        />
        <button
          type="button"
          disabled={ valid }
          onClick={ this.handleRedirectCarteira }
        >
          Entrar
        </button>
      </div>);

    const conditionalRender = shouldRedirect ? <Redirect to="/carteira" /> : componente;
    return (
      conditionalRender
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserLogin: (email) => dispatch(redirectCarteira(email)),
});

// Login.propTypes = {
//   dispatchUserLogin: PropTypes.func.isRequired,
// };

export default connect(null, mapDispatchToProps)(Login);
