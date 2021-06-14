import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'BRL',
      method: 'money',
      tag: 'alimentacao',
      currenciesArray: [],
    };
  }

  componentDidMount() {
    this.fetchApiFunction();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  fetchApiFunction() {
    const url = 'https://economia.awesomeapi.com.br/json/all';

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const currencies = Object.keys(response);
        this.setState({ currenciesArray: currencies });
      });
  }

  createValue() {
    const { value } = this.state;

    return (
      <label htmlFor="value">
        Valor
        <input
          onChange={ (e) => this.handleChange(e) }
          name="value"
          value={ value }
          id="value"
        />
      </label>
    );
  }

  createDescription() {
    const { description } = this.state;

    return (
      <label htmlFor="description">
        Descrição
        <input
          onChange={ (e) => this.handleChange(e) }
          name="description"
          value={ description }
          id="description"
        />
      </label>
    );
  }

  createCurrency() {
    const { currenciesArray } = this.state;
    const usdt = 'USDT';

    return (
      <label htmlFor="currency">
        Moeda
        <select
          onChange={ (e) => this.handleChange(e) }
          id="currency"
          role="combobox"
          name="currency"
        >
          {
            currenciesArray
              .filter((param) => param !== usdt)
              .map((curr) => <option key={ curr }>{curr}</option>)
          }
        </select>
      </label>
    );
  }

  createPaymentMethod() {
    const { method } = this.state;

    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          onChange={ (e) => this.handleChange(e) }
          id="method"
          role="combobox"
          name="method"
          value={ method }
        >
          <option value="money">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
      </label>
    );
  }

  createCategory() {
    const { tag } = this.state;

    return (
      <label htmlFor="tag">
        Tag
        <select
          onChange={ (e) => this.handleChange(e) }
          id="tag"
          role="combobox"
          name="tag"
          value={ tag }
        >
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { email } = this.props;
    const { dispenses, currency } = this.state;

    return (
      <>
        <header>
          <h2 data-testid="email-field">{ email }</h2>
          <h2 data-testid="total-field">{ dispenses }</h2>
          <h2 data-testid="header-currency-field">{ currency }</h2>
        </header>
        <form>
          { this.createValue() }
          { this.createDescription() }
          { this.createCurrency() }
          { this.createPaymentMethod() }
          { this.createCategory() }
          <button type="button">Adicionar despesa</button>
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
