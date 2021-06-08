import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      dispenses: 0,
      currencyField: 'BRL',
      allCurrencies: [],
    };
  }

  componentDidMount() {
    this.saveCurrencies();
  }

  async saveCurrencies() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const request = await fetch(URL);
    const jsonResponse = await request.json();
    const data = Object.values(jsonResponse);
    const currencies = data.filter((item) => !(item.name.includes('Turismo')));
    this.setState({
      allCurrencies: currencies,
    });
  }

  makeOptions() {
    const { allCurrencies } = this.state;
    const currenciesMap = allCurrencies.map(
      ({ code }, index) => <option value={ code } key={ index }>{ code }</option>,
    );
    return (currenciesMap);
  }

  renderForms() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            { this.makeOptions() }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="categoria">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { email } = this.props;
    const { dispenses, currencyField } = this.state;
    return (
      <article>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ dispenses }</p>
          <p data-testid="header-currency-field">{ currencyField }</p>
        </header>
        { this.renderForms() }
        <main>
          <p>a</p>
        </main>
      </article>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
