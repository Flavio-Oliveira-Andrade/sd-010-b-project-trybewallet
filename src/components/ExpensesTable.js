import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesButton from './ExpensesButton';

class ExpensesTable extends Component {
  constructor(props) {
    super(props);

    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.renderExpensesRolls = this.renderExpensesRolls.bind(this);
  }

  renderTableHeader() {
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

  renderExpensesRolls() {
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
            <ExpensesButton id={ id } />
          </td>
        </tr>
      ),
    );
  }

  render() {
    const { renderTableHeader, renderExpensesRolls } = this;

    return (
      <table>
        {renderTableHeader() }
        <tbody>
          {renderExpensesRolls()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRates,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps)(ExpensesTable);
