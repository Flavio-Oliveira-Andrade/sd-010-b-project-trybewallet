import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { totalExpense, deleteExpense } from '../actions/formActions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    const { expenses, deleteItem, getPrice } = this.props;
    const filter = expenses.filter((expense) => expense.id !== id);
    deleteItem(filter);
    getPrice(filter);
  }

  render() {
    const { expenses } = this.props;
    const form = expenses.map((expense) => {
      const {
        currency, description, exchangeRates, id, method, tag, value,
      } = expense;
      const { ask, name } = exchangeRates[currency];
      const nameCoin = name.split('/')[0];
      const convertedValue = (Math.round(value * ask * 100) / 100).toFixed(2);

      return (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{nameCoin}</td>
          <td>{Number(ask).toFixed(2)}</td>
          <td>{convertedValue}</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              onClick={ () => this.deleteItem(id) }
              data-testid="delete-btn"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (form);
  }
}
const mapStateToProps = ({ wallet: { expenses, itemPrice } }) => ({
  expenses,
  itemPrice,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (payload) => dispatch(deleteExpense(payload)),
  getPrice: (payload) => dispatch(totalExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  expenses: propTypes.func,
}.isRequired;
