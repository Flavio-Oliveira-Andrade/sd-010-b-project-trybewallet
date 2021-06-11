import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormAddExpense from '../components/FormAddExpense';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  constructor() {
    super();

    this.expensesTotal = this.expensesTotal.bind(this);
  }

  expensesTotal() {
    const { expenses } = this.props;

    if (expenses.length >= 1) {
      const result = expenses.reduce((acc, { value, currency, exchangeRates }) => {
        const findCurrency = Object.values(exchangeRates)
          .find(({ code }) => currency === code);
        const finalValue = parseFloat(findCurrency.ask) * parseFloat(value);
        return acc + finalValue;
      }, 0);
      return result;
    }
    return 0;
  }

  render() {
    const { emailUser } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">
            User:&nbsp;
            {/* O código acima é para adicionar um espaço "forçado"
            entre a primeira linha e a segunda */}
            { emailUser }
          </span>
          <span data-testid="total-field">
            Total expenses:&nbsp;
            { this.expensesTotal() }
          </span>
          <span data-testid="header-currency-field">
            &nbsp;BRL
          </span>
        </header>
        <FormAddExpense />
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
