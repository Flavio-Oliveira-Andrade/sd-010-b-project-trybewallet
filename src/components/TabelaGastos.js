import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions/index';

class TabelaGastos extends Component {
  constructor() {
    super();
    this.excluirExpense = this.excluirExpense.bind(this);
  }

  excluirExpense(index) {
    const { savedExpenses, deleteExpense: deleter } = this.props;
    const aux = [...savedExpenses];
    aux.splice(index, 1);
    deleter(aux);
  }

  render() {
    const { savedExpenses } = this.props;
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
          {savedExpenses.map((expense, index) => (
            <tr key={ index }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
              <td>
                {(+expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>
                {(+expense.value * expense.exchangeRates[expense.currency].ask)
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.excluirExpense(index) }
                >
                  {' '}
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  savedExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expense) => dispatch(deleteExpense(expense)),
});

TabelaGastos.propTypes = {
  savedExpenses: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(TabelaGastos);
