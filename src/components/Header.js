import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.somaDespesa = this.somaDespesa.bind(this);
  }

  somaDespesa() {
    const { despesas } = this.props;
    const soma = despesas.reduce(
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
        <p data-testid="email-field">
          { email }
        </p>
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
  despesas: state.wallet.despesas,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  despesas: PropTypes.arrayOf(Object).isRequired,
};
