import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props) {
  const { expenses, email } = props;
  let sum = 0;
  if (expenses.length !== 0) {
    const total = expenses.reduce((acc, curr) => {
      const moeda = curr.currency;
      acc += curr.value * parseFloat(curr.exchangeRates[moeda].ask);
      return acc;
    }, 0);
    sum = total.toFixed(2);
    console.log(sum);
  }

  return (
    <header>
      <p data-testid="email-field">
        Email:
        { email }
      </p>
      <p data-testid="total-field">
        { sum }
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
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
