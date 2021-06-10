import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props; // vou ter que usar pro elemento que exibe o email de quem fez o login.
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}
Header.propTypes = {
  email: PropTypes.string.isRequired,
}; // aqui o email é uma string.

export default Header;
