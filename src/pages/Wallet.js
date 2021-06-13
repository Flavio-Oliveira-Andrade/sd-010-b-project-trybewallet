import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormExpenses from '../components/FormExpenses';
import { deleteExpenseAction } from '../actions';

class Wallet extends React.Component {
  currencyValue(expense) {
    const currencySelected = expense.exchangeRates.find((ex) => ex[expense.currency]);
    return parseFloat(currencySelected[expense.currency].ask).toFixed(2);
  }

  valueExpenseConvertedToReal(expense) {
    const currencySelected = expense.exchangeRates.find((ex) => ex[expense.currency]);
    const valueExpense = (
      currencySelected[expense.currency].ask * expense.value
    ).toFixed(2);
    return parseFloat(valueExpense);
  }

  updateState(valueExpense) {
    this.setState((oldState) => ({
      totalExpenses: oldState.totalExpenses + valueExpense,
    }));
  }

  totalExpenses(expenses) {
    let totalExpenses = 0;
    let valueReal = 0;
    expenses.forEach((expense) => {
      valueReal = this.valueExpenseConvertedToReal(expense);
      totalExpenses += valueReal;
    });
    return totalExpenses.toFixed(2);
  }

  renderExpenses(expenses, deleteExpense) {
    return (
      expenses.map((expense, index) => (
        <tr key={ index }>
          <td>{ expense.description }</td>
          <td>{ expense.tag }</td>
          <td>{ expense.paymentMethod }</td>
          <td>{ `${expense.currency} ${expense.value}` }</td>
          <td>
            { expense.exchangeRates.find(
              (ex) => ex[expense.currency],
            )[expense.currency].name.replace('/Real Brasileiro', '') }
          </td>
          <td>{ this.currencyValue(expense) }</td>
          <td>{ this.valueExpenseConvertedToReal(expense) }</td>
          <td>Real Brasileiro</td>
          <td>
            <button
              data-testid="delete-btn"
              type="submit"
              onClick={ () => deleteExpense(expense) }
            >
              Excluir
            </button>
          </td>
        </tr>
      ))
    );
  }

  render() {
    const { user: { email }, expenses, deleteExpense } = this.props;
    return (
      <>
        <div>TrybeWallet</div>
        <header>
          <div data-testid="email-field">{ email }</div>
        </header>
        <p>Despesa total:</p>
        <p data-testid="total-field">
          { /* this.totalExpenses(expenses) */ }
        </p>

        <p>Campo:</p>
        <p data-testid="header-currency-field">BRL</p>

        <FormExpenses />
        <table border="1">
          <tr>
            <td>Descrição</td>
            <td>Tag</td>
            <td>Método de pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Câmbio utilizado</td>
            <td>Valor Convertido</td>
            <td>Moeda de conversão</td>
            <td>Editar/Excluir</td>
          </tr>
          { this.renderExpenses(expenses, deleteExpense) }
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expense) => dispatch(deleteExpenseAction(expense)),
});

Wallet.propTypes = {
  user: PropTypes.shape().isRequired,
  expenses: PropTypes.shape().isRequired,
  deleteExpense: PropTypes.func().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
