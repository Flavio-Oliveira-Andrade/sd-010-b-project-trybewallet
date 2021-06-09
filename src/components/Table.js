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
            <th>{expense.description}</th>
            <th>{expense.tag}</th>
            <th>{expense.method}</th>
            <th>{expense.value}</th>
            <th>{expense.currency}</th>
            {/* <th>{expense.description}</th> */}
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
