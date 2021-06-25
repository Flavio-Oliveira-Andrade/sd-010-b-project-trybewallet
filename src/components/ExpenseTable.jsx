import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseTable extends Component {
  constructor() {
    super();

    this.tableHeader = this.tableHeader.bind(this);
  }

  tableHeader() {
    return (
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
  }

  tableBody() { // source: https://github.com/tryber/sd-010-b-project-trybewallet/blob/gmcerqueira/src/components/ExpensesTable.js
    const { expenses } = this.props;

    return expenses.map(
      ({
        id,
        description,
        tag,
        method,
        value,
        currency,
        exchangeRates,
      }) => (
        <tr id={ id } key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{exchangeRates[currency].name}</td>
          <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
          <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
          <td>Real</td>
          <td>
            button
          </td>
        </tr>
      ),
    );
  }

  render() {
    return (
      <table>
        { this.tableHeader() }
        <tbody>
          { this.tableBody() }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRates,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpenseTable);
