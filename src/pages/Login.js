import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      disable: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const { password, email } = this.state;
    const minLength = 4;
    if(password.length > minLength && email.includes('.com')){
      this.setState({ [event.target.name]: event.target.value})
      this.setState({ disable: false });
    }
  }

  render() {
    const { disable } = this.state;
    return (
    <div className="Login">
      <form className="formLogin">
        <input
        placeholder="email"
        name="email"
        data-testid="email-input"
        onChange={ this.handleChange }
        />
        <input
        placeholder="senha"
        name="password"
        data-testid="password-input"
        onChange={ this.handleChange }
        />
        <button
        type="button"
        disabled={ disable }
        >
          Entrar
        </button>
      </form>
    </div>
    );
  }
}

export default Login;
