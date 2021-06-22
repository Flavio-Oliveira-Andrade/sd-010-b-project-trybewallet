import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTable extends Component {
  render() {
    const { expense } = this.props;
    const characterSize = -16;
    return (
      <div>
        <table>
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
          <tbody>
            {expense.map((value) => (
              <tr key={ value.id }>
                <td>{value.description}</td>
                <td>{value.tag}</td>
                <td>{value.method}</td>
                <td>{value.value}</td>
                <td>
                  {value.exchangeRates[value.currency]
                    .name.slice(0, characterSize)}
                </td>
                <td>{parseFloat(value.exchangeRates[value.currency].ask).toFixed(2)}</td>
                <td>
                  {parseFloat(value.exchangeRates[value.currency]
                    .ask * value.value).toFixed(2)}
                </td>
                <td>Real</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expense: state.wallet.expenses,
  exchangeRates: state.wallet.expenses.exchangeRates,
});

ExpensesTable.propTypes = {
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpensesTable);
