import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Forms';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.amountExpenses = this.amountExpenses.bind(this);
  }

  amountExpenses() {
    const { expenses } = this.props;
    const result = expenses.reduce((acc, current) => {
      const currencyUse = current.currency;

      const valuesCurrency = Object.values(current.exchangeRates);

      const dataCurrency = valuesCurrency.find((e) => e.code === currencyUse);
      console.log(dataCurrency);

      const askNow = dataCurrency.ask;

      const expensesOfUser = current.value;
      const totalExpenses = askNow * expensesOfUser;
      acc += totalExpenses;
      return acc;
    },
    0);
    return result.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <nav>
            <h1>Welcome to your wallet</h1>
            <section data-testid="email-field">
              Seu email:
              {' '}
              {email}
            </section>
            <section data-testid="total-field">
              Despesa total:
              {' '}
              {this.amountExpenses()}
            </section>
            <section data-testid="header-currency-field">
              Câmbio : BRL
            </section>
          </nav>
        </header>
        <main>
          <Form />
          <Table />
        </main>
      </>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
