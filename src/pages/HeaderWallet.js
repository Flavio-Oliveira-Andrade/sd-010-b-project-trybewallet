import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderWallet extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default HeaderWallet;
