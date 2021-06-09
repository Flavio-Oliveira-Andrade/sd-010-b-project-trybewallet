import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delExpense, updateAmount } from '../actions';
import TableBody from './TableBody';

const tableHeader = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class ExpenseTable extends Component {
  render() {
    const { expenses, removeExpense, updateExpenses } = this.props;

    const expenseAmount = expenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      return acc + value * exchangeRates[currency].ask;
    }, 0);
    updateExpenses(expenseAmount);

    return (
      <table>
        <thead>
          <tr>
            {tableHeader.map((th, idx) => <th key={ idx }>{th}</th>)}
          </tr>
        </thead>
        <TableBody expenses={ expenses } removeExpense={ removeExpense } />
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (value) => dispatch(delExpense(value)),
  updateExpenses: (value) => dispatch(updateAmount(value)),
});
ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
