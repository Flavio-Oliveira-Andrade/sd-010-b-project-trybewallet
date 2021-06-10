import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = { cotation: undefined, currencies: [] };
    this.loadPrices = this.loadPrices.bind(this);
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

  render() {
    const { cotation, currencies } = this.state;
    // if (cotation === undefined) return <h1>Loading...</h1>;
    const { emailLog } = this.props;
    return (
      <div>
        <header id="header">
          <h5 data-testid="email-field">{ emailLog }</h5>
          <h6 data-testid="total-field">0</h6>
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
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailLog: state.user.email });

Wallet.propTypes = {
  emailLog: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
