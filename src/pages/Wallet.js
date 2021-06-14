import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  render() {
    const { email, currency } = this.props;
    const { total } = this.state;
    return (
      <div>
        <header>
          <h1 data-testid="email-field">{ email }</h1>
          <h2 data-testid="total-field">{ total }</h2>
          <span data-testid="header-currency-field">{ currency }</span>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,

}.isRequires;

export default Wallet;
