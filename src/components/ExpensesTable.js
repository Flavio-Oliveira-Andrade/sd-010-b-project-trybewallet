import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { removeExpense } from '../actions';

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);

    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    const { expenses, deleteItem } = this.props;
    return expenses.map((
      { id, value, currency, method, tag, description, exchangeRates }, index,
    ) => (
      <tr key={ id }>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ exchangeRates[currency].name }</td>
        <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
        <td>
          { (parseFloat(value) * parseFloat(exchangeRates[currency].ask)).toFixed(2) }
        </td>
        <td>Real</td>
        <th>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => deleteItem(index) }
          >
            Delete
          </button>
        </th>
      </tr>
    ));
  }

  render() {
    return (
      <table>
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
        <tbody>
          {this.renderTable()}
        </tbody>
      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (index) => dispatch(removeExpense(index)),
});

ExpensesTable.propTypes = {
  expenses: propTypes.arrayOf(Object).isRequired,
  deleteItem: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
