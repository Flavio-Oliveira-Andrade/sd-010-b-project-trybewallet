import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletTable from '../Components/WalletTable';
import WalletForm from '../Components/WalletForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal() {
    const { userExpenses } = this.props;
    const values = userExpenses.map((expense) => (parseInt(expense.value, 10)
    * expense.exchangeRates[expense.currency].ask));
    const total = values.reduce((acc, curr) => acc + curr, 0);
    if (!total) return 0;
    return total;
  }

  render() {
    const { userEmail } = this.props;
    const total = this.calculateTotal();
    return (
      <div>
        <header>
          <section data-testid="email-field">{userEmail}</section>
          <section data-testid="total-field">{`Total: ${total.toFixed(2)}`}</section>
          <section data-testid="header-currency-field">Moeda atual: BRL</section>
        </header>
        <WalletForm />
        <WalletTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
