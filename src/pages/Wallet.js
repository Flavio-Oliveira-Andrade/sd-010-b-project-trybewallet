import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  getCurrencies() {
    const { currencies } = this.state;
    return currencies.map((currency) => {
      if (currency !== 'USDT') {
        return <option key={ currency }>{ currency }</option>;
      }
      return null;
    });
  }

  fetchCurrencies() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => {
        const currencies = Object.keys(response);
        this.setState({
          currencies,
        });
      });
  }

  renderHeadingInputs(name, value, id) {
    return (
      <div>
        <span>
          { name }
          :
        </span>
        <span
          data-testid={ id }
        >
          { value }
        </span>
      </div>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header className="wallet-header">
          { this.renderHeadingInputs('Email', email, 'email-field')}
          { this.renderHeadingInputs('Total', 0, 'total-field')}
          { this.renderHeadingInputs('Câmbio', 'BRL', 'header-currency-field')}
        </header>
        <h1 className="wallet-title">TrybeWallet</h1>
        <form className="wallet-form">
          <label htmlFor="value">
            Valor
            <input type="text" id="value" className="input-value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              { this.getCurrencies() }
            </select>
          </label>
          <label htmlFor="payment">
            Método de Pagamento
            <select id="payment">
              <option name="Dinheiro">Dinheiro</option>
              <option name="Cartão de crédito">Cartão de crédito</option>
              <option name="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option name="Alimentação">Alimentação</option>
              <option name="Lazer">Lazer</option>
              <option name="Trabalho">Trabalho</option>
              <option name="Transporte">Transporte</option>
              <option name="Saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
