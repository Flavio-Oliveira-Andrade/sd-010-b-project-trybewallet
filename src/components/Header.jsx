import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Form';

class Header extends Component {
  constructor(props) {
    super(props);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    if (expenses.length < 1) {
      return 0;
    }
    return expenses.reduce((acc, cur) => {
      const values = Object.values(cur.exchangeRates);
      const filterBRLT = values.filter((value) => value.codein !== 'BRLT');
      const filterCurrency = filterBRLT.filter((value) => cur.currency === value.code);
      const finalCurrency = filterCurrency[0].ask;
      acc += Number(cur.values) * finalCurrency;
      return (acc);
    }, 0);
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ userEmail }</p>
        <label htmlFor="input-despesa-total">
          Despesas totais:
          <input
            name="input-despesa-total"
            type="number"
            value={ this.totalExpenses() }
            data-testid="total-field"
          />
        </label>
        <label htmlFor="actual-currency">
          Moeda atual:
          <select name="actual-currency" data-testid="header-currency-field">
            <option value="BRL">BRL</option>
          </select>
        </label>
        <Form />
      </header>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.shape({
    length: PropTypes.number,
    reduce: PropTypes.func,
  }).isRequired,
  userEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
