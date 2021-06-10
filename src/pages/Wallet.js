import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { add, allAmount } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = { cotation: 0, currencies: [] };
    this.loadPrices = this.loadPrices.bind(this);
    this.totalAmount = this.totalAmount.bind(this);
  }

  componentDidMount() {
    this.loadPrices();
  }

  async loadPrices() {
    const JSON = await fetch('https://economia.awesomeapi.com.br/json/all');
    const cotation = await JSON.json();
    const currencies = Object.keys(cotation)
      .filter((currency) => currency !== 'USDT');
    this.setState({
      cotation,
      currencies,
    });
  }

  totalAmount() {
    this.loadPrices();
    const { cotation } = this.state;
    const { addAmount, calculateTotal, id } = this.props;
    const value = document.querySelector('#value');
    const description = document.querySelector('#description').value;
    const method = document.querySelector('#payament').value;
    const tag = document.querySelector('#tag').value;
    const currency = document.querySelector('#currency').value;
    const brlEquivalent = cotation[currency].bid * value.value;
    const cot = cotation;
    delete cotation.USDT;
    addAmount({
      id,
      value: value.value,
      description,
      currency,
      method,
      tag,
      exchangeRates: cot });
      console.log(brlEquivalent);
    calculateTotal(brlEquivalent);
  }

  render() {
    const { currencies } = this.state;
    const { emailLog } = this.props;
    return (
      <div>
        <header id="header">
          <h5 data-testid="email-field">{ emailLog }</h5>
          <h6 data-testid="total-field">{this.props.total}</h6>
          <h6 data-testid="header-currency-field">BRL</h6>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input id="value" type="number" />
          </label>
          <label htmlFor="description">
            Descrição
            <input id="description" type="text" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {currencies.map((c, i) => <option key={ i } value={ c.bid }>{c}</option>)}
            </select>
          </label>
          <label htmlFor="payament">
            Método de pagamento
            <select id="payament">
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.totalAmount }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailLog: state.user.email,
  id: state.wallet.id,
  total: state.wallet.total,
});

// Wallet.propTypes = {
//   emailLog: PropTypes.string.isRequired,
// };

const mapDispatchToProps = (dispatch) => ({
  addAmount: (state) => dispatch(add(state)),
  calculateTotal: (state) => dispatch(allAmount(state)) });

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
