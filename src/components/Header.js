import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  totalChange() {
    const { totalExpense } = this.props;
    const values = totalExpense.reduce((acc, curr) => {
      const change = curr.exchangeRates[curr.currency].ask;
      return (Number(acc) + Number(curr.value * change)).toFixed(2);
    }, 0);
    return values;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span
          data-testid="total-field"
        >
          {`Despesa total: R$ 
            ${this.totalChange()}`}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpense: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
