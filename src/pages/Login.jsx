import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.checkValidation = this.checkValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    this.checkValidation();
  }

  checkValidation() {
    const emailCheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const { email, password } = this.state;
    const button = document.getElementById('btn');
    const SIX_LETTERS = 6;

    if (email.match(emailCheck) && password.length >= SIX_LETTERS) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  handleChange(event) {
    const { target: { name, value } } = event;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleChange } = this;
    // const { email, password } = this.state;

    return (
      <div className="box">
        <div className="login">
          <div className="img">
            <img src="" alt="" />
          </div>
          <section className="inputs">
            <input
              name="email"
              type="text"
              onChange={ (handleChange) }
              placeholder="email"
              data-testid="email-input"
            />
            <input
              name="password"
              type="password"
              minLength="6"
              onChange={ handleChange }
              placeholder="senha"
              data-testid="password-input"
            />
          </section>
          <div className="link">
            <button
              id="btn"
              type="button"
              disabled
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
