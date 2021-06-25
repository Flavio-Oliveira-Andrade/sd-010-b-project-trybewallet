import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props, { email }) {
  const { expenses } = props;
  let sum = 0;
  if (expenses.length !== 0) {
    sum = expenses.reduce((acc, curr) => {
      const moeda = curr.currency;
      acc += curr.value * parseFloat(curr.exchangeRates[moeda].ask);
      return acc;
    }, 0);
    console.log(sum);
  }

  return (
    <header>
      <p data-testid="email-field">
        Email:
        { email }
      </p>
      <p data-testid="total-field">
        { sum.toFixed(2) }
      </p>
      <p data-testid="header-currency-field">
        Câmbio: BRL
      </p>
    </header>
  );
}

Header.propTypes = {
  expenses: PropTypes.objectOf(),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
