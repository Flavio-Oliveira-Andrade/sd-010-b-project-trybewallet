import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, spend } = this.props;
    return (
      <header>
        <div className="user-info">
          <span>Email:</span>
          <span data-testid="email-field">{ email }</span>
        </div>
        <div className="user-expenses">
          <span>Despesa Total: </span>
          <span data-testid="total-field">{spend}</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const sumSpend = (spent) => {
  if (spent.length !== 0) {
    const sum = spent
      .reduce(
        (
          acc, { value, currency, exchangeRates },
        ) => acc + (Number(value) * Number(exchangeRates[currency].ask)), 0,
      );
    return Number(sum.toFixed(2));
  }
  return 0;
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  spend: sumSpend(state.wallet.expenses),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  spend: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
