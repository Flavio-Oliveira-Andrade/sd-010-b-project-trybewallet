import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dellExpense from '../actions/dellExpenseAction';

class TableWallet extends Component {
  render() {
    const { expenses, dell } = this.props;
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
          { expenses.map((exp, id) => (
            <tr key={ id }>
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
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => dell(id) }
                >
                  Dell
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dell: (id) => dispatch(dellExpense(id)),
});

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dell: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TableWallet);
