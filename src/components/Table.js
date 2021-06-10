import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { expensesInfo } = this.props;
    return (
      <table>
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
            <td>{expense.currency}</td>
            <th>{expense.exchangeRates[expense.currency].name}</th>
            <th>{expense.exchangeRates[expense.currency].ask * expense.value}</th>
            <th>Real</th>
            <th>
              <button data-testid="delete-btn" type="button">x</button>
              <button data-testid="edit-btn" type="button">Editar despesa</button>
            </th>
          </tr>))}
      </table>
    );
  }
}

Table.propTypes = {
  expensesInfo: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  expensesInfo: state.wallet.expenses,
});

// const mapDispatchToProps = (dispatch) => ({
//   addExpense: (stateData) => dispatch(addExpenseAction(stateData)),
// });

export default connect(mapStateToProps, null)(Table);
