import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addNewExpense } from '../actions';

class Expenses extends React.Component {
  constructor(props) {
    super(props);

    this.dispatchAction = this.dispatchAction.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    const { expenses } = this.props;
    this.state = {
      currency: '',
      description: '',
      exchangeRate: {},
      id: expenses.length,
      method: '',
      tag: '',
      value: '',
    };
  }
  
  handleClick() {
    const { newExpense } = this.props;
  }

  render() {
    return ();
  }
}

Expense.propTypes = {
  newExpense: propTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  newExpense: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  newExpense: (expense) => dispatch(addNewExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
