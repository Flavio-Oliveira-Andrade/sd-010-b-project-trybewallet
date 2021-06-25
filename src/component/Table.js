import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dellExpense } from '../actions';

class Table extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const { dispatchDelete, expenses } = this.props;
    // lógica de remoção -> newExpenses (sem o item que vc quer remover)
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    console.log(newExpenses);
    dispatchDelete(newExpenses);
    // addExpenses();
  }

  render() {
    const { expenses } = this.props;
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
          { expenses.map((e, index) => (
            <tr key={ index }>
              <td>{e.description}</td>
              <td>{e.tag}</td>
              <td>{e.method}</td>
              <td>{e.value}</td>
              <td>{e.exchangeRates[e.currency].name.split('/')[0]}</td>
              <td>
                {parseFloat(e.exchangeRates[e.currency].ask).toFixed(2)}
              </td>
              <td>
                {parseFloat(e.value
                  * e.exchangeRates[e.currency].ask).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleClick(e.id) }
                >
                  Deletar
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDelete: (deleteExpense) => dispatch(
    dellExpense(deleteExpense),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
