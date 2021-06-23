import React from 'react';
import { connect } from 'react-redux';
import TBody from './TBody';

class Table extends React.Component {
  render() {
    return (
      <table className="table-content">
        <thead className="table-heading">
          <tr>
            <td>Descrição</td>
            <td>Tag</td>
            <td>Método de pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Câmbio utilizado</td>
            <td>Valor convertido</td>
            <td>Moeda de conversão</td>
            <td>Editar/Excluir</td>
          </tr>
        </thead>
        <tbody className="table-body">
          <TBody />
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses, itensPrices } }) => ({
  expenses,
  itensPrices,
  totalExpense,
});

export default connect(mapStateToProps)(Table);
