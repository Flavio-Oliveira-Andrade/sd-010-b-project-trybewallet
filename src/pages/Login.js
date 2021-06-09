import React from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/index'

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      activeLoginButton: false,
    };
  };

  componentDidUpdate() {
    this.validateFields();
  };

  // Verificar se os campos estão preenchidos
  validateFields = () => {
    const { activeLoginButton} = this.state;

    if(this.validateEmailInput() && this.validatePasswordInput() && !activeLoginButton) {
      this.setState({ activeLoginButton: true });
    } else if (!this.validateEmailInput() && !this.validatePasswordInput() && activeLoginButton) {
      this.setState({ activeLoginButton: false });
    }
  };

  validateEmailInput = () => {
    const { email } = this.state;

    if(email.includes('@') && email.includes('.')) {
      return true;
    }
  };

  validatePasswordInput = () => {
    const { password } = this.state;

    if(password.length >= 6){
      return true;
    }
  };

  // Captura a digitação dos inputs para o estado
  handleChange = ({ id, value }) => {
    this.setState({ [id]: value });
  }

  render() {
    const { activeLoginButton } = this.state;
    const { dispatchEmail } = this.props;
    return (
      <section className="loginSection">
        <input id="email" type="text" placeholder="Email" data-testid="email-input" onChange={ ({ target }) => (
          dispatchEmail(target),
          this.handleChange(target)
          ) } />
        <input id="password" type="password" placeholder="Senha" data-testid="password-input" onChange={ (event) => this.handleChange(event) } />
        <button type="button" disabled={ activeLoginButton } >Entrar</button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: ({ value }) => dispatch(setLogin(value))
});

export default connect(null, mapDispatchToProps)(Login);
