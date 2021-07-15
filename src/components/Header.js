import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import logo from '../img/trybe-logo.png';
import { updateTotalExpense } from '../actions';

class Header extends React.Component {
  render() {
    const getTotalSum = () => {
      const { updateTotalSum, expenses } = this.props;
      let sum = 0;
      expenses.forEach((exp) => {
        if (exp.exchangeRates[exp.currency]) {
          sum += exp.value * exp.exchangeRates[exp.currency].ask;
        }
      });
      sum = Math.round(sum * 100) / 100;
      updateTotalSum(sum);
    };

    getTotalSum();

    const { email, total } = this.props;

    return (
      <header className="header">
        <img src={ logo } alt="logo-trybe" className="logo" />
        <div className="infos-field">
          <label htmlFor="email">
            Email:
            <h5 data-testid="email-field" id="email">{ email }</h5>
          </label>
          <label htmlFor="total" className="currency">
            Despesa total:
            <h5 data-testid="total-field" id="total">
              { total !== undefined ? total : 0 }
            </h5>
            <h5 data-testid="header-currency-field">BRL</h5>
          </label>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.user.total,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  updateTotalSum: (sum) => dispatch(updateTotalExpense(sum)),
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
