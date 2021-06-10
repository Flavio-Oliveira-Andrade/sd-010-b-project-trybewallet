import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './tabela.css';

class TabelaGastos extends Component {
  constructor(props) {
    super(props);

    this.createTableHeading = this.createTableHeading.bind(this);
    this.createTableExpenses = this.createTableExpenses.bind(this);
  }

  createTableHeading() {
    return (
      <table>
        <thead>
          <tr>
            <th className="cabecalho">Descrição</th>
            <th className="cabecalho">Tag</th>
            <th className="cabecalho">Método de pagamento</th>
            <th className="cabecalho">Valor</th>
            <th className="cabecalho">Moeda</th>
            <th className="cabecalho">Câmbio utilizado</th>
            <th className="cabecalho">Valor convertido</th>
            <th className="cabecalho">Moeda de conversão</th>
            <th className="cabecalho">Editar/Excluir</th>
          </tr>
        </thead>
      </table>
    );
  }

  createTableExpenses(expValue) {
    return (
      <table>
        <thead>
          <tr key={ expValue.id }>
            <td>{expValue.description}</td>
            <td>{expValue.tag}</td>
            <td>{expValue.method}</td>
            <td>{expValue.value}</td>
            <td>{ expValue.exchangeRates[expValue.currency].name.split('/')[0] }</td>
            <td>
              {parseFloat(expValue.exchangeRates[expValue.currency].ask)
                .toFixed(2)}
            </td>
            <td>
              {(parseFloat(expValue.value)
            * parseFloat(expValue.exchangeRates[expValue.currency].ask))
                .toFixed(2)}
            </td>
            <td>Real</td>
          </tr>
        </thead>
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
  expenses: PropTypes.objectOf({}).isRequired,
};
