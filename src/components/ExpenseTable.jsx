import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delExpense } from '../actions';

const tableHeader = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class ExpenseTable extends Component {
  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {tableHeader.map((th, idx) => <th key={ idx }>{th}</th>)}
          </tr>
        </thead>
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
                <td>Real</td>
                <td>
                  <button type="submit">Editar</button>
                  <button
                    type="submit"
                    onClick={ () => {
                      // console.log(idx);
                      removeExpense(idx);
                    } }
                    data-testid="delete-btn"
                  >
                    Excluir
                  </button>
                </td>
              </tr>);
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (value) => dispatch(delExpense(value)),
});
ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
