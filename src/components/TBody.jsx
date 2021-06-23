import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { calculateTotalExpense, removeExpense } from '../actions/tableActions';

class TBody extends React.Component {
  constructor() {
    super();

    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(id) {
    const { expenses, deleteItem, getPrice } = this.props;
    const filtredExpenses = expenses.filter((expense) => expense.id !== id);
    deleteItem(filtredExpenses);
    getPrice(filtredExpenses);
  }

  render() {
    const { expenses } = this.props;
    const tBody = expenses.map((expense) => {
      const {
        currency, description, exchangeRates, id, method, tag, value,
      } = expense;
      const { ask, name } = exchangeRates[currency];
      const coin = name.split('/')[0];
      const convertedValue = (value * ask).toFixed(2);

      return (
        <tr key={ id }>
          <td name="Descrição">{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{coin}</td>
          <td>{Number(ask).toFixed(2)}</td>
          <td>{convertedValue}</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              onClick={ () => this.removeItem(id) }
              data-testid="delete-btn"
            >
              Deletar
            </button>
          </td>
        </tr>
      );
    });
    return (tBody);
  }
}
const mapStateToProps = ({ wallet: { expenses, itensPrices } }) => ({
  expenses,
  itensPrices,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (payload) => dispatch(removeExpense(payload)),
  getPrice: (payload) => dispatch(calculateTotalExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TBody);

TBody.propTypes = {
  expenses: propTypes.func,
}.isRequired;
