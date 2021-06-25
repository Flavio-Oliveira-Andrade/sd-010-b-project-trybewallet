import React from 'react';
import PropTypes from 'prop-types';

class HeaderWallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="header-currency-field">Moeda: BRL</span>
      </div>
    );
  }
}

HeaderWallet.propTypes = {
  value: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default HeaderWallet;
