import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenses } from '../actions/index';

class ExpensesTable extends Component {
  constructor() {
    super();

    this.myTable = this.myTable.bind(this);
    this.myThead = this.myThead.bind(this);
    this.onClick = this.onClick.bind(this);
    this.delete = this.delete.bind(this);
  }

  onClick(id) {
    console.log(id);
    // console.log(target.value);
  }

  delete(param) {
    // console.log(id);
    const { expenses, deleteExpense } = this.props;
    deleteExpense(expenses.filter(({ id }) => id !== param));
  }

  myThead() {
    return (
      <thead>
        <tr>
          <th>
            Descrição
          </th>
          <th>
            Tag
          </th>
          <th>
            Método de pagamento
          </th>
          <th>
            Valor
          </th>
          <th>
            Moeda
          </th>
          <th>
            Câmbio utilizado
          </th>
          <th>
            Valor convertido
          </th>
          <th>
            {' '}
            Moeda de conversão
          </th>
          <th>
            {' '}
            Editar/Excluir
          </th>
        </tr>
      </thead>
    );
  }

  myTable() {
    const { expenses } = this.props;
    return (
      <table>
        {this.myThead()}
        <tbody>
          { expenses
            .map((
              { description, tag, method, value, currency, exchangeRates, id }, index,
            ) => (
              <tr key={ index }>
                <td>
                  {description }
                </td>
                <td>
                  {tag}
                </td>
                <td>
                  {method}
                </td>
                <td>
                  {value}
                </td>
                <td>
                  {exchangeRates[currency].name}
                </td>
                <td>
                  {Number(exchangeRates[currency].ask).toFixed(2)}
                </td>
                <td width="15px">
                  {Number(exchangeRates[currency].ask * value).toFixed(2)}
                </td>
                <td width="15px">
                  Real
                </td>
                <td>
                  <button type="button" onClick={ () => this.onClick(id) }> edit</button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.delete(id) }
                  >
                    deletar
                  </button>
                </td>
              </tr>))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        {this.myTable()}

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (data) => dispatch(deleteExpenses(data)),

});

ExpensesTable.propTypes = {
  expenses: PropTypes.func,
  deleteExpenses: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
