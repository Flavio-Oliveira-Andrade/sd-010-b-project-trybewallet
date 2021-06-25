import React from 'react';
import PropTypes from 'prop-types';

class HeaderWallet extends React.Component {
  render() {
    const { value, email } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Olá
          {` ${email}`}
        </p>
        <p>
          <span data-testid="total-field">
            {`Total das despesas ${value}
          `}
          </span>
        </p>
        <p>
          Moeda:
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

HeaderWallet.propTypes = {
  value: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default HeaderWallet;