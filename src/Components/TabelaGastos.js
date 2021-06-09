import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TabelaGastos extends Component {
  constructor(props) {
    super(props);

    this.createTableHeading = this.createTableHeading.bind(this);
    this.createTableExpenses = this.createTableExpenses.bind(this);
  }

  createTableHeading() {
    return (
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
      </table>
    );
  }

  createTableExpenses(expValue) {
    console.log(expValue);
    return (
      <table>
        <tr>
          <th>{expValue.description}</th>
          <th>{expValue.tag}</th>
          <th>{expValue.method}</th>
          <th>{expValue.value}</th>
          <th>{ expValue.exchangeRates[expValue.currency].name.split('/')[0] }</th>
          <th>{parseFloat(expValue.exchangeRates[expValue.currency].ask).toFixed(2)}</th>
          <th>
            {parseFloat(expValue.value)
            * parseFloat(expValue.exchangeRates[expValue.currency].ask)
              .toFixed(2)}
          </th>
          <th>Real</th>
        </tr>
      </table>
    );
  }

  render() {
    const { expenses } = this.props;
    const expensesValues = Object.values(expenses);
    return (
      <>
        { this.createTableHeading() }
        { expenses.length > 0 ? expensesValues
          .map((expValue) => this.createTableExpenses(expValue)) : null }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TabelaGastos);

TabelaGastos.propTypes = {
  expenses: PropTypes.arrayOf({}).isRequired,
};
