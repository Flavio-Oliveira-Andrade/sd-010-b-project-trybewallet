import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableWallet extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table width="100%" className="TableWallet">
        <tbody>
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
          { expenses.map((exp) => (
            <tr key={ exp.description }>
              <td>{ exp.description }</td>
              <td>{ exp.tag }</td>
              <td>{ exp.method }</td>
              <td>{ Number(parseFloat(exp.value).toFixed(2)) }</td>
              <td>
                { exp.exchangeRates[exp.currency].name.replace('/Real Brasileiro', '') }
              </td>
              <td>
                { Number(parseFloat(exp.exchangeRates[exp.currency].ask).toFixed(2)) }
              </td>
              <td>{ Number(exp.exchangeRates[exp.currency].ask) * Number(exp.value) }</td>
              <td>Real</td>
              <td>
                <button type="button">Edit</button>
                <button type="button">Dell</button>
              </td>
            </tr>
          )) }

        </tbody>
      </table>
    );
  }
}

TableWallet.propTypes = {
  // place: PropTypes.string.isRequired,
  // type: PropTypes.string,
  // name: PropTypes.string.isRequired,
  // test: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TableWallet.defaultProps = {
  // type: 'text',
};

export default TableWallet;
