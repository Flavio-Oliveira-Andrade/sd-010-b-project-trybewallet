import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions/walletAction';

class DelButton extends Component {
  render() {
    const { id, delExpense } = this.props;

    return (
      <>
        <button
          id={ id }
          data-testid="edit-btn"
          type="button"
        >
          EDIT
        </button>
        <button
          id={ id }
          data-testid="delete-btn"
          type="button"
          onClick={ ({ target }) => delExpense(
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
  delExpense: (expenseID) => dispatch(deleteExpense(expenseID)),
});

DelButton.propTypes = {
  id: PropTypes.number.isRequired,
  delExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DelButton);
