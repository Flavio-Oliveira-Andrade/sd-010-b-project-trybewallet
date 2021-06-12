import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;
    const expensesArray = expenses.map((entry) => (
      entry.value * entry.exchangeRates[entry.currency].ask));
    const sum = expensesArray.reduce((acc, curr) => acc + curr);
    return parseFloat(sum).toFixed(2);
  }

  render() {
    const { user: { email }, expenses } = this.props;
    return (
      <header>
        <div className="Header">
          <p data-testid="email-field">
            Email:
            { email }
          </p>
          <div>
            Despesa Total:
            <p data-testid="total-field">
              { expenses.length > 0 ? this.sumExpenses() : 0 }
            </p>
            &nbsp;
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Header);
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://qastack.com.br/programming/11665884/how-can-i-parse-a-string-with-a-comma-thousand-separator-to-a-number
// https://www.w3schools.com/jsref/jsref_tofixed.asp
// totalSpent = Total gasto
// totalPaid = Total pago
// exchange rate = taxa de câmbio
// Exchange Currency = Moeda de câmbio
