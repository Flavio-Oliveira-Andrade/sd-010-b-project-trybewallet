import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

class TableBody extends Component {
  render() {
    const { expenses, removeExpense, editExpense } = this.props;

    return (
      <tbody>
        {expenses.map((expense, idx) => {
          const { value, description, currency, method, tag, exchangeRates } = expense;
          const currencyName = exchangeRates[currency].name.split('/');
          return (
            <tr key={ idx }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{currencyName[0]}</td>
              <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{parseFloat(value * exchangeRates[currency].ask).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button
                  type="submit"
                  data-testid="edit-btn"
                  onClick={ () => editExpense(expense) }
                >
                  <AiFillEdit />
                </button>
                <button
                  type="submit"
                  data-testid="delete-btn"
                  onClick={ () => { removeExpense(idx); } }
                >
                  <AiFillDelete />
                </button>
              </td>
            </tr>);
        })}

      </tbody>
    );
  }
}

TableBody.propTypes = {
  expenses: PropTypes.arrayOf,
}.isRequired;

export default TableBody;
