import React from 'react';

function ExpenseTable() {
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

  return (
    <table>
      { tableHead() }
    </table>
  );
}

export default ExpenseTable;