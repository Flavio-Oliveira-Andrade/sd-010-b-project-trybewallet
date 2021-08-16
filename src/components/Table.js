import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delExpense } from '../actions';

class Table extends Component {
  constructor() {
    super();
    this.cotationTable = this.cotationTable.bind(this);
    // this.delExpense = this.delExpense.bind(this);
  }

  // delExpense() {
  //   const { expenses /* deleteExpense */ } = this.props;
  //   console.log(expenses);
  //   console.log(expenses.id);
  // }

  cotationTable() {
    const { expenses, deleteExpense } = this.props;
    return (
      <tbody>
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.currency}</td>
            <td>
              {Math.round(Object.values(expense.exchangeRates).filter(
                (currency) => ((currency.code === expense.currency)),
              )[0].bid).toFixed(2)}
            </td>
            <td>
              {console.log(expense.id)}
              {Math.round(Object.values(expense.exchangeRates).filter(
                (currency) => ((currency.code === expense.currency)),
              )[0].ask).toFixed(2)}
            </td>
            <td>
              {expense.value * Math.round(Object.values(expense.exchangeRates).filter(
                (currency) => ((currency.code === expense.currency)),
              )[0].ask).toFixed(2) }
            </td>
            <td>
              { Object.values(expense.exchangeRates).filter(
                (currency) => ((currency.code === expense.currency)),
              )[0].name.split('/')[0]}
            </td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => deleteExpense(expense.id) }
              >
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </tbody>);
  }

  render() {
    // const { expenses } = this.props;
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th> Descrição </th>
              <th> Tag </th>
              <th> Método de pagamento </th>
              <th> Valor </th>
              <th> Moeda </th>
              <th> Câmbio </th>
              <th> Câmbio utilizado </th>
              <th> Valor convertido </th>
              <th> Moeda de conversão </th>
              <th> Editar/Excluir </th>
            </tr>
          </thead>
          { this.cotationTable() }
        </table>
      </section>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(delExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
