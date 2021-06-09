import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrency from '../services/api/currencyApi';

const currencyArr = [
  'USD', 'CAD', 'EUR',
  'GBP', 'ARS', 'BTC',
  'LTC', 'JPY', 'CHF',
  'AUD', 'CNY', 'ILS',
  'ETH', 'XRP'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
  }

  async componentDidMount() {
    const allCurrencies = await getCurrency();
    const filteredCurrencies = Object.keys(allCurrencies)
      .filter((currency) => currencyArr.includes(currency));
    this.updateCurrency(filteredCurrencies);
  }

  updateCurrency(currencies) {
    this.setState({ currencies });
  }

  renderCurrenciesAsOption() {
    const { currencies } = this.state;
    return currencies.map((c) => <option key={ c } value={ c }>{c}</option>);
  }

  render() {
    const { email } = this.props;
    const renderedCurrencies = this.renderCurrenciesAsOption();
    return (
      <>
        <header>
          <p data-testid="email-field">{email}</p>
          <select data-testid="header-currency-field">
            <option defaultValue>BRL</option>
          </select>
          <p data-testid="total-field">0</p>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input id="value" type="number" name="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input id="description" type="text" name="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {renderedCurrencies}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  totalExpense: wallet.totalExpense,
  email: user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
};

Wallet.defaultProps = {
  email: 'hello@ola.com',
};

export default connect(mapStateToProps)(Wallet);
