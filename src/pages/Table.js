import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense, editExpense } from '../actions/index';

class Table extends React.Component {
  constructor() {
    super();
    this.renderExpensesTable = this.renderExpensesTable.bind(this);
    this.handleDeleteExpense = this.handleDeleteExpense.bind(this);
    this.handleEditExpense = this.handleEditExpense.bind(this);
  }

  handleDeleteExpense(id) {
    const { deleteExpenseAction } = this.props;
    deleteExpenseAction(id);
  }

  handleEditExpense(id) {
    const { editExpenseAction } = this.props;
    editExpenseAction(id);
  }

  renderExpensesTable() {
    const { getWalletState } = this.props;
    return getWalletState.map((expense) => {
      let getCurrency = expense.exchangeRates[expense.currency];
      const getAsk = expense.exchangeRates[expense.currency];
      let ask = '';
      let value = Number.parseFloat(expense.value);
      let rawAsk = '';
      ask = getAsk.ask * 100;
      rawAsk = getAsk.ask;
      ask = (Math.round(ask) / 100).toFixed(2);
      value *= Number.parseFloat(rawAsk);
      value = (Math.round(value * 100) / 100);
      getCurrency = [getCurrency.name.split('/')[0]]; // array destructuring
      return (
        <tr key={ expense.id }>
          <td>{expense.description}</td>
          <td>{expense.tag}</td>
          <td>{expense.method}</td>
          <td>{expense.value}</td>
          <td>{getCurrency}</td>
          <td>{ask}</td>
          <td>{value}</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              onClick={ () => this.handleDeleteExpense(expense.id) }
              data-testid="delete-btn"
            >
              Deletar
            </button>
            <button
              type="button"
              data-testid="edit-btn"
              onClick={ () => this.handleEditExpense(expense.id) }
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Descrição</td>
            <td>Tag</td>
            <td>Método de pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Câmbio utilizado</td>
            <td>Valor convertido</td>
            <td>Moeda de conversão</td>
            <td>Editar/Excluir</td>
          </tr>
        </thead>
        <tbody>{this.renderExpensesTable()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  getWalletState: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseAction: (id) => dispatch(deleteExpense(id)),
  editExpenseAction: (id) => dispatch(editExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  deleteExpenseAction: PropTypes.func.isRequired,
  getWalletState: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      exchangeRates: PropTypes.objectOf.isRequired,
      id: PropTypes.number.isRequired,
      method: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  editExpenseAction: PropTypes.func.isRequired,
};
