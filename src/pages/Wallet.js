import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../component/Form';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  //   // this.soma = this.soma.bind(this);
  // }

  // soma() {
  //   const { expenses } = this.props;
  //   const sum = expenses.reduce(
  //     (acumulador, valorAtual) => acumulador + (valorAtual.exchangeRates[valorAtual.currency].ask * valorAtual.value),
  //     0,
  //   );
  //   return parseFloat(sum).toFixed(2);
  // }
  // ref https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce e @lara-capila

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <h1 data-testid="email-field">{ email }</h1>
          <h2 data-testid="total-field">0</h2>
          <span data-testid="header-currency-field">
            Moeda de conversão:
            {' '}
            BRL
          </span>
        </header>
        <Form />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  // expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Wallet);
