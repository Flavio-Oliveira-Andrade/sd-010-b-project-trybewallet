import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends Component {
  constructor() {
    super();

    this.expensesTotal = this.expensesTotal.bind(this);

    this.state = {
      current: 'BRL',
    };
  }

  findProp(exchangeRates, currency) {
    const findCurrency = Object.values(exchangeRates)
      .find(({ code }) => currency === code);
    return findCurrency;
  }

  calculeValue(exchangeRates, currency, value) {
    if (value === '' || value === undefined) {
      return 0;
    }
    const findCurrency = this.findProp(exchangeRates, currency);
    const finalValue = parseFloat(findCurrency.ask) * parseFloat(value);
    return finalValue;
  }

  reduceTotal(objCurrency) {
    const result = objCurrency.reduce((acc, { value, currency, exchangeRates }) => {
      if (value === '' || value === undefined) {
        return 0;
      }
      const finalValue = this.findProp(exchangeRates, currency, value);
      return acc + finalValue;
    }, 0);
    return result;
  }

  expensesTotal() {
    const { objCurrency } = this.props;
    if (objCurrency) {
      this.reduceTotal(objCurrency);
    }
    return 0;
  }

  render() {
    const { current } = this.state;
    const { login, objCurrency } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          { login }
        </p>
        <span data-testid="total-field">
          { this.expensesTotal() }
        </span>
        <span data-testid="header-currency-field">
          { current }
        </span>
        <Form />
        <table>
          <thead>
            <tr>
              <td>Descrição</td>
              <td>Tag</td>
              <td>Método de pagamento</td>
              <td>Valor</td>
              <td>Moeda</td>
              <td>Câmbio utilizado</td>
              <td>Valor convertido</td>
              <td>Moeda de conversão</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
          </thead>
          <tbody>
            { objCurrency && objCurrency.map((
              { id, description, value, currency, method, tag, exchangeRates },
            ) => (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ !value ? 0 : value }</td>
                <td>{ (this.findProp(exchangeRates, currency).name).split('/')[0] }</td>
                <td>{ this.findProp(exchangeRates, currency).ask }</td>
                <td>{ this.calculeValue(exchangeRates, currency, value) }</td>
                <td>Real</td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
  objCurrency: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  login: PropTypes.string.isRequired,
  objCurrency: PropTypes.string.isRequired,
};
