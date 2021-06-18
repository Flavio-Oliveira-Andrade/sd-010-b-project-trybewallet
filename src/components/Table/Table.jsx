import React from 'react';
import { useSelector } from 'react-redux';
import { getNewId } from '../../services/idServices';

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
      <tr>
        <th value="Descrição">Descrição</th>
        <th value="Tag">Tag</th>
        <th value="Método de pagamento">Método de pagamento</th>
        <th value="Valor">Valor</th>
        <th value="Moeda">Moeda</th>
        <th value="Câmbio utilizado">Câmbio utilizado</th>
        <th value="Valor convertido">Valor convertido</th>
        <th value="Moeda de conversão">Moeda de conversão</th>
        <th value="Editar/Excluir">Editar/Excluir</th>
      </tr>
      { tableExpenses() }
    </div>
  );
}

export default Table;
