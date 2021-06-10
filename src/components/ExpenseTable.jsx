import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

const tableHead = () => (
  <thead>
    <tr>
      <th>Descrição</th>
      <th>Tag</th>
      <th>Método de pagamento</th>
      <th>Valor</th>
      <th>Moeda</th>
      <th>Câmbio utilizado</th>
      <th>Valor convertido</th>
      <th>Moeda de conversão</th>
      <th>Editar/Excluir</th>
    </tr>
  </thead>
);

const tableBody = (expenses) => (
  <tbody>
    { expenses.map(({
      id,
      description,
      tag,
      method,
      value,
      currency,
      exchangeRates,
    }) => (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{exchangeRates[currency].name}</td>
        <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{(exchangeRates[currency].ask * parseFloat(value)).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button type="button" data-testid="delete-btn">Excluir</button>
        </td>
      </tr>
    ))}
  </tbody>
);

function ExpenseTable({ expenses }) {
  return (
    <table>
      {tableHead()}
      {tableBody(expenses)}
    </table>
  );
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFn: (id) => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
