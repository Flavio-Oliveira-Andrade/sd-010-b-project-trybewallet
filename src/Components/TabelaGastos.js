import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './tabela.css';
import { deleteExpenseAction } from '../actions';

class TabelaGastos extends Component {
  constructor(props) {
    super(props);

    this.createTableHeading = this.createTableHeading.bind(this);
    this.createTableExpenses = this.createTableExpenses.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  deleteExpense({ target }) {
    const { expenses, updateExpenses } = this.props;
    const idDeletado = target.parentNode.getAttribute('name');
    const newArrayExpense = [...expenses]
      .filter((expense) => expense.id !== Number(idDeletado));
    updateExpenses(newArrayExpense);
  }

  editExpense({ target }) {
    
  }

  createTableHeading() {
    return (
      <table>
        <tr>
          <th className="cabecalho">Descrição</th>
          <th className="cabecalho">Tag</th>
          <th className="cabecalho">Método de pagamento</th>
          <th className="cabecalho">Valor</th>
          <th className="cabecalho">Moeda</th>
          <th className="cabecalho">Câmbio utilizado</th>
          <th className="cabecalho">Valor convertido</th>
          <th className="cabecalho">Moeda de conversão</th>
          <th className="cabecalho">Editar/Excluir</th>
        </tr>
      </table>
    );
  }

  createTableExpenses(expValue) {
    return (
      <table>
        <tr key={ expValue.id } name={ expValue.id }>
          <td>{expValue.description}</td>
          <td>{expValue.tag}</td>
          <td>{expValue.method}</td>
          <td>{expValue.value}</td>
          <td>{ expValue.exchangeRates[expValue.currency].name.split('/')[0] }</td>
          <td>
            {parseFloat(expValue.exchangeRates[expValue.currency].ask)
              .toFixed(2)}
          </td>
          <td>
            {(parseFloat(expValue.value)
            * parseFloat(expValue.exchangeRates[expValue.currency].ask))
              .toFixed(2)}
          </td>
          <td>Real</td>
          <button
            key={ expValue.id }
            data-testid="delete-btn"
            type="button"
            onClick={ this.deleteExpense }
          >
            Delete
          </button>
          <button
            key={ expValue.id }
            data-testid="edit-btn"
            type="button"
            onClick={ this.editExpense }
          >
            Editar despesa
          </button>
        </tr>
      </table>
    );
  }

  render() {
    const { expenses } = this.props;
    const expensesValues = Object.values(expenses);
    return (
      <section>
        { this.createTableHeading() }
        { expenses.length > 0 ? expensesValues
          .map((expValue) => this.createTableExpenses(expValue)) : null }
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  updateExpenses: (newExpenses) => dispatch(deleteExpenseAction(newExpenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabelaGastos);

TabelaGastos.propTypes = {
  expenses: PropTypes.objectOf({}).isRequired,
  updateExpenses: PropTypes.objectOf({}).isRequired,
};
