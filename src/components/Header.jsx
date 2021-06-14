import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail, total } = this.props;
    const result = total.reduce((a, c) => a
    + (Number(c.value)
    * Number(c.exchangeRates[c.currency].ask)), 0);
    return (
      <header>
        <span data-testid="email-field">
          { userEmail }
        </span>

        <span data-testid="total-field">
          { (Math.round(result * 100) / 100).toFixed(2) }
        </span>

        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  total: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  total: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
