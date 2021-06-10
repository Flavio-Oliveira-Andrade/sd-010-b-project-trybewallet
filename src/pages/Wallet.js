import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.totalStoreExpenses = this.totalStoreExpenses.bind(this);
  }

  totalStoreExpenses() {
    const { valueOfExpenses } = this.props;
    // if (valueOfExpenses.length === 0) {
    //   return 0;
    // }
    const valueTotal = valueOfExpenses.reduce((acc, current) => (acc + current),
      0);
    return valueTotal;
  }

  render() {
    const { email, valueOfExpenses, coin } = this.props;
    return (
      <>
        <header>
          <div data-testid="email-field">{email}</div>
          <div data-testid="total-field">{this.totalStoreExpenses()}</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <main>
          <form>
            <label htmlFor="valueID">
              Valor
              <input id="valueID" type="number" name="name" />
            </label>
          </form>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  valueOfExpenses: state.wallet.expenses,
  coin: state.wallet.currencies,
});
export default connect(mapStateToProps, null)(Wallet);
