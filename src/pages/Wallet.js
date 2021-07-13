import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import '../styles/wallet.css';
import AddExpense from '../components/AddExpense';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetcher } = this.props;
    fetcher();
  }

  render() {
    return (
      <div>
        <Header />
        <AddExpense />
        <ExpenseTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetcher: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
