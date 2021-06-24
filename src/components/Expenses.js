import React from 'react';
import PropTypes from 'prop-types';

class ExpensesButton extends React.Component {
  render() {
    const { handler } = this.props;

    return (
      <button
        type="button"
        name="adicionar despesa"
        onClick={ handler }
      >
        Adicionar despesa
      </button>
    );
  }
}

ExpensesButton.propTypes = {
  handler: PropTypes.func,
}.isRequired;

export default ExpensesButton;
