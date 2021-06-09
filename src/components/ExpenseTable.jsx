import React from 'react';

const tableHead = () => (
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
);

const tableBody = (expenses) => (
  <tbody>
    { expenses.map(({
      id,
      description,
      tag,
      method,
      value,
      currency,
      exchangeRates,
    }) => (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{exchangeRates[currency].name}</td>
        <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{(exchangeRates[currency].ask * parseFloat(value)).toFixed(2)}</td>
        <td>Real</td>
        {/* <td>Editar/Excluir</td> */}
      </tr>
    ))}
  </tbody>
);

function ExpenseTable({ expenses }) {
  return (
    <table>
      { tableHead() }
    </table>
  );
}

export default ExpenseTable;
