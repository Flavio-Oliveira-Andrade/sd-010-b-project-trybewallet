import React from 'react';
// import { connect } from 'react-redux';
// import PropTyoes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {};
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="login-form">
        Login
        <label htmlFor="email">
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
