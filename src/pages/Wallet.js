import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dispenseAction } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.saveCurrencies = this.saveCurrencies.bind(this);
    this.saveDispense = this.saveDispense.bind(this);

    this.state = {
      currencyField: 'BRL',
      allCurrencies: [],
      dispenseCurrentInfo: {
        value: '',
        description: '',
        currency: 'USD',
        method: '',
        tag: '',
      },
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

  saveDispense() {
    const { sendDispense } = this.props;
    const { dispenseCurrentInfo } = this.state;
    sendDispense(dispenseCurrentInfo);
  }

  handleChange({ target }) {
    const { value, name } = target;
    const { dispenseCurrentInfo } = this.state;
    const { id } = this.props;
    this.setState({
      dispenseCurrentInfo: {
        ...dispenseCurrentInfo,
        [name]: value,
        id,
      },
    });
  }

  calculateTotal() {
    const { expenses } = this.props;
    if (expenses.length < 1) {
      return 0;
    }
    return expenses.reduce((total, item) => {
      const choosenCurrency = item.currency;
      const onlyValues = Object.values(item.exchangeRates);
      const withoutBRLT = onlyValues.filter((el) => el.codein !== 'BRLT');
      const findCurrency = withoutBRLT.filter((el) => choosenCurrency === el.code);
      const valueCurrency = findCurrency[0].ask;
      total += Number(item.value) * valueCurrency;
      return (total);
    }, 0);
  }

  returnDispensesList() {
    const { expenses } = this.props;
    return (
      <section>
        { expenses.map((item, index) => (
          <div key={ index }>
            <p>{ item.valor }</p>
          </div>
        ))}
      </section>
    );
  }

  renderForms() {
    return (
      <form>
        <label htmlFor="valor">
          valor
          <input type="text" name="value" id="valor" onChange={ this.handleChange } />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            name="description"
            id="descricao"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="currency" onChange={ this.handleChange }>
            { this.makeOptions() }
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de pagamento
          <select
            name="method"
            id="método de pagamento"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
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
    const { currencyField } = this.state;
    return (
      <article>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ this.calculateTotal() }</p>
          <p data-testid="header-currency-field">{ currencyField }</p>
        </header>
        { this.renderForms() }
        <button type="button" onClick={ this.saveDispense }>Adicionar despesa</button>
        <main>
          { this.returnDispensesList() }
        </main>
      </article>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  sendDispense: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendDispense: (dispenseInfo) => dispatch(dispenseAction(dispenseInfo)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  id: state.wallet.expenses.length,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
