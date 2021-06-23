import React from 'react';
import TBody from './TBody';

class Table extends React.Component {
  render() {
    return (
      <table className="table-content">
        <thead className="table-heading">
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
        <tbody className="table-body">
          <TBody />

        </tbody>
      </table>
    );
  }
}

export default Table;
