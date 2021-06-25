import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, editExp, loadData } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'BRL',
      method: '',
      tag: '',
      description: '',
      id: false,
    };
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  render() {
    const { email, currencies, expenses, total } = this.props;
    return (
      <div>
        <h1 data-testid="email-field">{ email }</h1>
        <h1 data-testid="total-field">{`${total}`}</h1>
        <h1 data-testid="header-currency-field">BRL</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(loadData()),
  addingExpenses: (wallet) => dispatch(loadData(wallet)),
  editingExpenses: (wallet) => dispatch(editExp(wallet)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number,
  fetchAPI: PropTypes.func.isRequired,
  addingExpenses: PropTypes.func.isRequired,
  editingExpenses: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
