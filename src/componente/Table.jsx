import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteExpense, editExpense } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      decription: '',
    };
  }

  onChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  onClickSave() {
    const { expenses, edit, update, expense } = this.props;
    const newList = {};
    const newExpense = { ...this.state };
    const nl = expenses.map((list) => (list.id === expense.id ? newExpense : list));
    update(nl);
    edit(newList, false);
  }

  deleteOnClick(thisId) {
    const { remover, expenses } = this.props;
    const thisList = expenses.filter((expense) => expense.id !== thisId);
    remover(thisList);
  }

  editOnClick(thisId) {
    const { edit, expenses } = this.props;
    const thisList = expenses.find((expense) => expense.id === thisId);
    edit(thisList, true);
    this.setState({
      id: thisList.id,
      value: thisList.value,
      currency: thisList.currency,
      method: this.method,
      tag: thisList.tag,
      description: thisList.description,
      exchangeRates: thisList.exchangeRates,
    });
  }

  renderSaveButton() {
    return (<input
      className="buttonLogin"
      type="button"
      value="Editar Despesa"
      onClick={ this.onClickSave }
    />);
  }

  renderTable() {
    const { expenses } = this.props;
    return (expenses.map((expense) => (
      <tr key={ expense.id }>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{expense.value}</td>
        <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
        <td>
          {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
          {' '}
        </td>
        <td>
          {Number(expense.value * expense.exchangeRates[expense.currency].ask).toFixed(2)}
          {' '}
        </td>
        <td>Real</td>
        <td>
          <button
            className="edit-btn"
            type="button"
            data-testid="edit-btn"
            onClick={ () => this.editOnClick(expense.id) }
          >
            Edit
          </button>
          <button
            className="delete-btn"
            type="button"
            data-testid="delete-btn"
            onClick={ () => this.deleteOnClick(expense.id) }
          >
            Remove
          </button>
        </td>
      </tr>
    )));
  }

  renderDropCoins() {
    const { currency } = this.state;
    const { currencies } = this.props;
    if (currencies === '') {
      return <option value="BRL">BRL</option>;
    }
    return (
      <select
        data-testid="currency-input"
        value={ currency }
        id="currency"
        onChange={ this.onChange }
      >
        {currencies.map((moeda) => (
          <option key={ moeda.code } value={ moeda.code }>
            {moeda.code}
          </option>
        ))}
      </select>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  currencies: PropTypes.arrayOf(Object).isRequired,
  isEdit: PropTypes.bool.isRequired,
  remover: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  expense: PropTypes.arrayOf(),
}.isRequired;

const mapStateToProps = ({ wallet: { expenses, currencies, isEdit,
  expense } }) => ({ expenses, currencies, isEdit, expense });

const mapDispatchProps = (dispatch) => ({
  remover: (expense) => dispatch(deleteExpense(expense)),
  edit: (expense, isEdit) => dispatch(editExpense(expense, isEdit)),
  update: (expenses) => dispatch(setExpenses(expenses)),

});
export default connect(mapStateToProps, mapDispatchProps)(Table);
