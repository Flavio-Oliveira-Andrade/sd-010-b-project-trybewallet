import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense, isChangeEdit, handleExpense } from '../../actions';
import Button from '../Button';

class Trow extends Component {
  constructor() {
    super();
    this.updateExpense = this.updateExpense.bind(this);
  }

  updateExpense() {

  }

  render() {
    const {
      changeEdit,
      deleteExpense,
      expense,
      handle,
      expense: { id, description, tag, method, currency, exchangeRates, value },
    } = this.props;
    const totalPrice = exchangeRates[currency].ask * value;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{exchangeRates[currency].name.split('/')[0]}</td>
        <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{parseFloat(totalPrice).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <Button
            id="edit-btn"
            name="Editar"
            onClick={ () => {
              changeEdit(true);
              handle(expense);
            } }
          />
          <Button id="delete-btn" name="Excluir" onClick={ () => deleteExpense(id) } />
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expense) => dispatch(removeExpense(expense)),
  changeEdit: (bool) => dispatch(isChangeEdit(bool)),
  handle: (expense) => dispatch(handleExpense(expense)),
});

Trow.propTypes = {
  expenses: PropTypes.objectOf(),
  deleteExpense: PropTypes.func,
  changeEdit: PropTypes.func,
}.IsRequeried;

export default connect(null, mapDispatchToProps)(Trow);
