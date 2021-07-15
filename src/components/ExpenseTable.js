import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import '../styles/expenseTable.css';
// import EditDeleteButtons from './EditDeleteButtons';
import { updateTotalExpense, fetchCurrencies } from '../actions';
// import renderColumn from '../functions/renderColumn';
import ResultsTable from './ResultsTable';

const columns = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

class ExpenseTable extends React.Component {
  render() {
    const { expenses } = this.props;
    // console.log(expenses);
    return (
      <table className="expense-table">
        <thead>
          <tr className="table-head">
            {columns.map((column) => (
              <th role="columnheader" key={ column } className="head-cel">{column}</th>
            ))}
          </tr>
        </thead>
        {expenses.length > 0
          ? <ResultsTable expenses={ expenses } /> : null }
        {/* <ResultsTable expenses={ expenses } /> */}
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateTotalSum: (payload) => dispatch(updateTotalExpense(payload)),
  fetcher: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  isFeching: state.wallet.isFeching,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
