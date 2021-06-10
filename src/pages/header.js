import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props; // Nessa props o email tá sendo uma string. Vou ter que usar pro elemento que exibe o email de quem fez o login. Essa props TÁ VINDO DO ESTADO GLOBAL, lá no user do reducers, em initialstate
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
};

export default Header;
