import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.somaDespesa = this.somaDespesa.bind(this);
  }

  somaDespesa() {
    const { expenses } = this.props;
    const soma = expenses.reduce(
      (accumulator, currentValue) => accumulator
      + (currentValue.exchangeRates[currentValue.currency].ask
      * currentValue.value),
      0,
    );
    return parseFloat(soma).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          { email }
        </div>
        <span data-testid="total-field">
          R$
          {' '}
          <strong>
            { this.somaDespesa() }
          </strong>
        </span>
        <p data-testid="header-currency-field">
          Moeda de conversão:
          {' '}
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};
