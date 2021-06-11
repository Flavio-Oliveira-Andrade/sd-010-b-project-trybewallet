// Tive ajuda do Lucas Martins para arredondamentos dos valores de cambio e calor convertido!
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import removeExpenseAction from '../actions/removeExpenseAction';

class Table extends React.Component {
  render() {
    const { expensesInfo, removeExpense } = this.props;
    return (
      <table>
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
          {expensesInfo.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
              <td>
                {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>
                {parseFloat(expense.exchangeRates[expense.currency].ask * expense.value)
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  onClick={ () => removeExpense(expense) }
                  type="button"
                >
                  x

                </button>
                <button data-testid="edit-btn" type="button">Editar despesa</button>
              </td>
            </tr>))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expensesInfo: PropTypes.arrayOf(Object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expensesInfo: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (tableRow) => dispatch(removeExpenseAction(tableRow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
