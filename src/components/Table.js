// Tive ajuda do Lucas Martins para arredondamentos dos valores de cambio e calor convertido!
// Adaptei a ideia da Maiara Borsatti pra geracao da Table!!!
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editStateAction, removeExpenseAction } from '../actions/expensesActions';

class Table extends React.Component {
  generateTable(headers, expeseInfo, removeAction, isDisabled) {
    return (
      <tbody>
        <tr>
          {headers.map((head, index) => (<th key={ index }>{head}</th>))}
        </tr>
        {expeseInfo.map((expense) => (
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
                data-testid="edit-btn"
                onClick={ () => this.handleEditClick(expense) }
                type="button"
                disabled={ isDisabled }
              >
                {isDisabled ? 'Wait Edition' : 'Editar'}
              </button>
              <button
                data-testid="delete-btn"
                onClick={ () => removeAction(expense) }
                type="button"
                disabled={ isDisabled }
              >
                x
              </button>
            </td>
          </tr>))}
      </tbody>
    );
  }

  handleEditClick(expense) {
    const { editExpense } = this.props;
    editExpense(expense);
  }

  render() {
    const teste = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { rowInfo, removeExpense, disable } = this.props;
    return (
      <table>
        {this.generateTable(teste, rowInfo, removeExpense, disable)}
      </table>
    );
  }
}

Table.propTypes = {
  rowInfo: PropTypes.arrayOf(Object).isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  rowInfo: state.wallet.expenses,
  disable: state.edit.status,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (tableRow) => dispatch(removeExpenseAction(tableRow)),
  editExpense: (tableRow) => dispatch(editStateAction(tableRow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
