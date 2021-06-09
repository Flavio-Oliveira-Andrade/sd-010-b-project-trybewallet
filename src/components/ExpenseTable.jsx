import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <tbody>
        {expenses.map(({
          value, description, currency, method, tag, exchangeRates,
        }, idx) => {
          const currencyName = exchangeRates[currency].name.split('/');
          return (
            <tr key={ idx }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{currencyName[0]}</td>
              <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{parseFloat(value * exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{currencyName[1]}</td>
              <td>Editar/Excluir</td>
            </tr>);
        })}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps)(ExpenseTable);
