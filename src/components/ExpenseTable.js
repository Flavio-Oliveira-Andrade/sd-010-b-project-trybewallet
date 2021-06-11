import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';

class ExpenseTable extends Component {
  constructor(props) {
    super(props);

    this.renderTableHeader = this.renderTableHeader.bind(this);
  }

  renderTableHeader() {
    return (
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
    );
  }

  render() {
    const { renderTableHeader } = this;
    const { expenses, deleteExpense } = this.props;

    return (
      <table>
        {renderTableHeader() }
        <tbody>
          {expenses.map(
            ({
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates,
            }) => (
              <tr id={ id } key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button type="button" data-testid="edit-btn">
                    EDIT
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ ({ target }) => deleteExpense(
                      target.parentNode.parentNode.id,
                    ) }
                  >
                    X
                  </button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expenseId) => dispatch(removeExpense(expenseId)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
