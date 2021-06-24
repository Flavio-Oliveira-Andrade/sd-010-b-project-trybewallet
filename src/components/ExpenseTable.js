import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Thead from './Thead';
import { deleteAction } from '../actions';

class ExpenseTable extends React.Component {
  delete({ target: { id } }) {
    const { expenses, deleteExpenses } = this.props;
    const newExpenses = expenses.filter((e) => e.id !== parseInt(id, 10));
    deleteExpenses(newExpenses);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <Thead />
        </thead>
        <tbody>
          {expenses.map((expense) => {
            const {
              id, description, tag, method, value, currency, exchangeRates,
            } = expense;
            const { name, ask } = exchangeRates[currency];
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ name }</td>
                <td>{parseFloat(ask).toFixed(2)}</td>
                <td>{(ask * parseInt(value, 10)).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                  >
                    Editar
                  </button>
                  <button
                    data-testid="delete-btn"
                    id={ id }
                    onClick={ (e) => this.delete(e) }
                    type="button"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
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
  deleteExpenses: (newExpenses) => dispatch(deleteAction(newExpenses)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
