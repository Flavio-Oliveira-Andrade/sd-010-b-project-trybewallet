import React from 'react';
import HeaderTable from './HeaderTable';
import ContentsTable from './ContentsTable';

// As conversões de moedas foram baseadas na ajuda dada pelo Marcos Leandro

function Table() {
  const expenses = useSelector((state) => state.wallet.expenses);

  function tableExpenses() {
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
        </tr>
      );
    });
    return valueExpenses;
  }
  return (
    <div>
      <HeaderTable />
      <ContentsTable />
    </div>
  );
}

export default Table;
