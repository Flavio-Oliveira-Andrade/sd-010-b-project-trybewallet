import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { getExpenses } = this.props;
    return (
      <div>
        <table>
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
          {
            getExpenses.map((expense, key) => (
              <tr key={ key }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
                <td>
                  {(+expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)}
                </td>
                <td>
                  {(+expense.exchangeRates[expense.currency].ask * expense.value)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button" data-testid="delete-btn">Excluir</button>
                </td>
              </tr>
            ))

          }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

Table.propTypes = {
  getExpenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Table);
