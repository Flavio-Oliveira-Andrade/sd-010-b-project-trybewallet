import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import '../styles/wallet.css';
import EditExpense from '../components/EditExpense';
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
        <EditExpense />
        <ExpenseTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  isFeching: state.wallet.isFeching,
});

const mapDispatchToProps = (dispatch) => ({
  fetcher: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
