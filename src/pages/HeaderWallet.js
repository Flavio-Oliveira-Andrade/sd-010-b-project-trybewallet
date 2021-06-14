import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  render() {
    const { email, valueExpense } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{valueExpense}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  valueExpense:
  state.wallet.expenses.reduce((acc, curr) => acc + parseInt(curr.value, 10), 0),
});

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  valueExpense: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(HeaderWallet);
