import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense, modifyExpense } from '../actions';

class ExpensesButton extends Component {
  render() {
    const { deleteExpense, editExpense, id } = this.props;
    return (
      <>
        <button
          id={ id }
          type="button"
          data-testid="edit-btn"
          onClick={ ({ target }) => editExpense(
            target.id,
          ) }
        >
          EDIT
        </button>
        <button
          id={ id }
          type="button"
          data-testid="delete-btn"
          onClick={ ({ target }) => deleteExpense(
            target.id,
          ) }
        >
          X
        </button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expenseId) => dispatch(removeExpense(expenseId)),
  editExpense: (expenseId) => dispatch(modifyExpense(expenseId)),
});

ExpensesButton.propTypes = {
  id: PropTypes.number.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(ExpensesButton);
