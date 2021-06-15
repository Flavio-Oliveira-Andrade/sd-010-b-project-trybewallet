import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { actionThunkCoin } from '../actions/walletActions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    // this.totalStoreExpenses = this.totalStoreExpenses.bind(this);
  }



  // totalStoreExpenses() {
  //   const { valueOfExpenses } = this.props;
  //   // if (valueOfExpenses.length === 0) {
  //   //   return 0;
  //   // }
  //   const valueTotal = valueOfExpenses.reduce((acc, current) => (acc + current),
  //     0);
  //   return valueTotal;
  // }

  render() {
    const { email,} = this.props;
    return (
      <>
        <header>
          <div data-testid="email-field">{email}</div>
          <div data-testid="total-field">{0}</div>
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
  exchange:state.wallet.actualValue,
});

const mapDispatchToProps = (dispatch) => ({
  actionCoins: () => dispatch(actionThunkCoin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
