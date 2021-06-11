import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import ExpensesTable from '../components/ExpensesTable';
import ExpensesHeader from '../components/ExpensesHeader';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <ExpensesHeader />
        <ExpenseForm />
        <ExpensesTable />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  toModify: state.wallet.toModify,
});
export default connect(mapStateToProps)(Wallet);
