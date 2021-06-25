import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionClear } from '../actions';

class TableMoney extends React.Component {
  TableMoneyRenderize(expenses) {
    if (expenses.length > 0) {
      const { clear } = this.props;
      return (
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {Number(
                  expense.value * expense.exchangeRates[expense.currency].ask,
                ).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => clear({ index }) }
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      );
    }
  }

  render() {
    const { expenses } = this.props;
    return (
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
        {this.TableMoneyRenderize(expenses)}
      </table>
    );
  }
}

TableMoney.propTypes = {
  expenses: propTypes.obj,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  clear: (payload) => dispatch(actionClear(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableMoney);
