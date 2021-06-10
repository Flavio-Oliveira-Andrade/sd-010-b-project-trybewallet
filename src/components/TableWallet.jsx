import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dellExpense from '../actions/dellExpenseAction';

class TableWallet extends Component {
  constructor(props) {
    super(props);
    this.trs = this.trs.bind(this);
    this.fitRound = this.fitRound.bind(this);
  }

  trs() {
    return (
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
      </tr>);
  }

  fitRound(number) {
    const restEqual = parseFloat(number).toFixed(2).split('.')[1] === '00';
    // console.log(restEqual);
    return restEqual
      ? Number(parseFloat(number).toFixed(2)) : parseFloat(number).toFixed(2);
  }

  render() {
    const { expenses, dell, edit } = this.props;
    return (
      <table width="100%" className="TableWallet">
        <tbody>
          { this.trs() }
          { expenses.map((exp, id) => (
            <tr key={ id }>
              <td>{ exp.description }</td>
              <td>{ exp.tag }</td>
              <td>{ exp.method }</td>
              {/* valor */}
              <td>{ this.fitRound(exp.value) }</td>
              <td>
                { exp.exchangeRates[exp.currency].name.replace('/Real Brasileiro', '') }
              </td>
              <td>
                {/* Câmbio */}
                { this.fitRound(exp.exchangeRates[exp.currency].ask) }
              </td>
              {/* Valor convertido */}
              <td>
                { this.fitRound(
                  Number(exp.exchangeRates[exp.currency].ask) * Number(exp.value),
                ) }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  type="button"
                  onClick={ () => { edit(exp); } }
                >
                  Edit
                </button>
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
  edit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TableWallet);
