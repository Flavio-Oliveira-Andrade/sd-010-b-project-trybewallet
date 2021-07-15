import React from 'react';

const keys = ['description', 'tag', 'method',
  'value', 'moeda', 'cambio', 'exchangeRates'];

function createColumn(key, expense, cur) {
  switch (key) {
  case 'exchangeRates':
    return (
      <td role="cell" className="table-cel" key={ key }>
        {cur ? cur.ask * expense.value : null}
      </td>);
  case 'cambio':
    return (
      <td role="cell" className="table-cel" key={ key }>
        {cur ? (Math.ceil(cur.ask * 100) / 100) : null}
      </td>);
  case 'moeda':
    return (
      <td role="cell" className="table-cel" key={ key }>
        {cur ? cur.name.split('/')[0] : null}
      </td>);
  default:
    return <td key={ key } role="cell" className="table-cel">{expense[key]}</td>;
  }
}

function renderColumn(expense) {
  return (keys.map((key) => (
    createColumn(key, expense, expense.exchangeRates[expense.currency])
  )));
}

export default renderColumn;
