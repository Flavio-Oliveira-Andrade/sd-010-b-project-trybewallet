import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import { actionThunkCoin } from '../actions/walletActions';

class Wallet extends React.Component {
  render() {
    const { email, valueOfExpenses } = this.props;
    return (
      <>
        <header>
          <div data-testid="email-field">{email}</div>
          <div data-testid="total-field">
            { valueOfExpenses.reduce((acc, exps) => (acc + exps.value
                    * exps.exchangeRates[exps.currency].ask),
            0).toFixed(2)}
          </div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <section>
          <Form />
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  valueOfExpenses: state.wallet.expenses,
  coin: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  actionCoins: () => dispatch(actionThunkCoin()),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
