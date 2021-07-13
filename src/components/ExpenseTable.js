import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import '../styles/expenseTable.css';
import EditDeleteButtons from './EditDeleteButtons';
import { updateTotalExpense } from '../actions';

const columns = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
const keys = ['description', 'tag', 'method',
  'value', 'moeda', 'cambio', 'exchangeRates'];

class ExpenseTable extends React.Component {
  getTotalSum() {
    const { expenses, updateTotalSum } = this.props;
    let sum = 0;
    expenses.forEach((expense) => {
      sum += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    sum = Math.round(sum * 100) / 100;
    updateTotalSum(sum);
  }

  render() {
    const { expenses } = this.props;
    this.getTotalSum();
    return (
      <table className="expense-table">
        <thead>
          <tr className="table-head">
            {columns.map((column) => (
              <th role="columnheader" key={ column } className="head-cel">{column}</th>))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, i) => (
            <tr key={ i } className="table-row">
              {keys.map((key) => {
                switch (key) {
                case 'exchangeRates':
                  return (
                    <td className="table-cel" key={ key }>
                      {expense[key][expense.currency].ask * expense.value}
                    </td>);
                case 'cambio':
                  return (
                    <td className="table-cel" key={ key }>
                      {(Math.ceil(
                        expense.exchangeRates[expense.currency].ask * 100,
                      ) / 100)}
                    </td>);
                case 'moeda':
                  return (
                    <td className="table-cel" key={ key }>
                      {expense.exchangeRates[expense.currency].name.split('/')[0]}
                    </td>);
                default:
                  return <td key={ key } className="table-cel">{expense[key]}</td>;
                }
              })}
              <td className="table-cel">
                Real
              </td>
              <EditDeleteButtons expense={ expense } />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateTotalSum: (payload) => dispatch(updateTotalExpense(payload)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
