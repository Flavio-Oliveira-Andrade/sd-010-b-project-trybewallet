import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewId } from '../../services/idServices';
import { deleteExpense } from '../../actions/index';

function ContentsTable() {
  const expenses = useSelector((state) => state.wallet.expenses);
  const dispatch = useDispatch();

  const valueExpenses = expenses.map((item) => {
    const exchangeRate = (parseFloat(item.exchangeRates[item.currency].ask)).toFixed(2);
    return (
      <tr key={ getNewId() }>
        <td>{ item.description }</td>
        <td>{item.tag}</td>
        <td>{ item.method }</td>
        <td>{item.value}</td>
        <td>{ item.exchangeRates[item.currency].name.split('/')[0] }</td>
        <td>{ exchangeRate }</td>
        <td>
          {(parseFloat(item.value * item.exchangeRates[item.currency].ask))
            .toFixed(2)}
        </td>
        <td>Real</td>
        <td>
          <button
            data-testid="delete-btn"
            type="button"
            onClick={ () => dispatch(deleteExpense(item.id)) }
          >
            Deletar
          </button>
        </td>
      </tr>
    );
  });
  return valueExpenses;
}

export default ContentsTable;
