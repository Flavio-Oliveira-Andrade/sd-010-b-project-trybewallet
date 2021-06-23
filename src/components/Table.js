// Tive ajuda do Lucas Martins para arredondamentos dos valores de cambio e calor convertido!
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import removeExpenseAction from '../actions/removeExpenseAction';
import editStateAction from '../actions/editStateAction';

class Table extends React.Component {
  generateTableHeaders() {
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

  render() {
    const { expensesInfo, removeExpense, editExpense } = this.props;
    const { disable } = this.props;
    return (
      <table>
        <tbody>
          {this.generateTableHeaders()}
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
                  disabled={ disable }
                >
                  x
                </button>
                <Link to="/edition">
                  <button
                    data-testid="edit-btn"
                    onClick={ () => editExpense(expense) }
                    type="button"
                    disabled={ disable }
                  >
                    {disable ? 'Wait Edition' : 'Editar despesa'}
                  </button>
                </Link>
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
  editExpense: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  expensesInfo: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (tableRow) => dispatch(removeExpenseAction(tableRow)),
  editExpense: (tableRow) => dispatch(editStateAction(tableRow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
