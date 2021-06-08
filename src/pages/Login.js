import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passWordError: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleValidadeEmail = this.handleValidadeEmail.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
      emailError: '',
    });
  }

  handleValidadeEmail() {
    const { email } = this.state;
    if(!email.includes('@') || !email.includes('.com')) {
      this.setState({
        emailError: '* invalid email',
      });
    }
  }

  render() {
    const { emailError } = this.state;
    return (
      <>
        <div>
          Login
        </div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              className="email"
              name="email"
              type="email"
              data-testid="email-input"
              onChange = { this.handleChange }
              onBlur = { this.handleValidadeEmail }
            />
            <p>{ emailError }</p>
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              name="password"
              type="password"
              data-testid="password-input"
              onChange = { this.handleChange }
            />
            <p className="passwordError"></p>
          </label>
          <button type="button" disabled>Entrar</button>
        </form>
      </>
    );
  }
}

export default Login;
