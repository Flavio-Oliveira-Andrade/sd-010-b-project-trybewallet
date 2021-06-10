import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenseAction } from '../actions';

class TableOfExpenses extends React.Component {
  constructor() {
    super();
    this.renderExpenses = this.renderExpenses.bind(this);
    this.onEditMenuClick = this.onEditMenuClick.bind(this);
  }

  onEditMenuClick({ target }) {
    const { edit, expenses } = this.props;
    const expense = expenses
      .find((response) => response.id === parseInt(target.name, 10));
    edit(expense);
  }

  deleteOnClick({ target }) {
    const { expenses, deleteAction } = this.props;
    const filterState = expenses
      .filter((expense) => expense.id !== parseInt(target.name, 10));
    const newState = filterState.map((expense) => ({
      ...expense,
    }));
    deleteAction(newState);
  }

  renderExpenses() {
    const { expenses } = this.props;
    const allExpenses = expenses.map((expense) => {
      const { value, description, exchangeRates, currency,
        method, tag, id } = expense;
      const exchangeRate = (parseFloat(exchangeRates[currency].ask)).toFixed(2);
      return (
        <tr key={ id }>
          <td name={ description }>{ description }</td>
          <td name={ tag }>{ tag }</td>
          <td name={ method }>{ method }</td>
          <td name={ value }>{ value }</td>
          <td>{ exchangeRates[currency].name.split('/')[0] }</td>
          <td name={ exchangeRate }>{ exchangeRate }</td>
          <td>
            {(parseFloat(value.replace(',', '.') * exchangeRates[currency].ask))
              .toFixed(2)}
          </td>
          <td>Real</td>
          <td>
            <button
              type="button"
              className="edit-button"
              data-testid="edit-btn"
              onClick={ (e) => this.onEditMenuClick(e) }
              name={ id }
            >
              &#9998;
            </button>
            <button
              type="button"
              className="delete-button"
              data-testid="delete-btn"
              name={ id }
              onClick={ (e) => this.deleteOnClick(e) }
            >
              &#10006;
            </button>
          </td>
        </tr>
      );
    });
    return allExpenses;
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th name="Descrição">Descrição</th>
            <th name="Tag">Tag</th>
            <th name="Método de pagamento">Método de pagamento</th>
            <th name="Valor">Valor</th>
            <th name="Moeda">Moeda</th>
            <th name="Câmbio utilizado">Câmbio utilizado</th>
            <th name="Valor convertido">Valor convertido</th>
            <th name="Moeda de conversão">Moeda de conversão</th>
            <th name="Editar/Excluir">Editar/Excluir</th>
          </tr>
          {this.renderExpenses()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAction: (payload) => dispatch(deleteExpenseAction(payload)),
});

TableOfExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteAction: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableOfExpenses);
