import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);

    this.deleteExpense = this.deleteExpense.bind(this);
    this.rowsTable = this.rowsTable.bind(this);

    this.state = {};
  }

  deleteExpense(e) {
    e.preventDefault();
    const id = e.target.value;
    const { myDispatch } = this.props;
    myDispatch({
      type: 'REMOVE_EXPENSE',
      payload: id,
    });
  }

  rowsTable() {
    return (
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
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tbody>
          {this.rowsTable()}
          { expenses.map((expense, index) => (
            <tr key={ index }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
              <td>
                { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>
                { parseFloat(expense.value
                    * expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  value={ expense.id }
                  onClick={ this.deleteExpense }
                >
                  Excluir
                </button>
                <button
                  type="button"
                  data-testid="edit-btn"
                  value={ expense.id }
                >
                  Editar
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
  expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  myDispatch: (state) => dispatch(loginAction(state)),
});
ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  myDispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
