import React from 'react';

class LoginData extends React.Component {
  render() {
    return (
      <fieldset className="input-area">
        <input type="text" data-testid="email-input" />
        <input type="text" data-testid="password-input" />
      </fieldset>
    );
  }
}

export default LoginData;
