import React from 'react';
import PropTypes from 'prop-types';

class AddExpenses extends React.Component {
  render() {
    const { handleDispatchExpense, state } = this.props;
    return (
      <button
        type="button"
        onClick={ () => handleDispatchExpense(state) }
      >
        Adicionar despesa
      </button>
    );
  }
}

AddExpenses.propTypes = {
  handleDispatchExpense: PropTypes.func.isRequired,
  state: PropTypes.shape({}).isRequired,
};

export default AddExpenses;
