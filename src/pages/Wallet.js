import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dispenses: 0,
      description: '',
      currency: 'BRL',
      currenciesArray: [],
    };
  }

  componentDidMount() {
    this.fetchApiFunction();
  }

  handleChangeValue(valor) {
    this.setState({ dispenses: valor });
  }

  handleChangeDescription(valor) {
    this.setState({ description: valor });
  }

  handleChangeCurrency(valor) {
    this.setState({ currency: valor });
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
    const { dispenses } = this.state;

    return (
      <label htmlFor="value">
        Valor
        <input
          onChange={ (e) => this.handleChangeValue(e.target.value) }
          name="value"
          value={ dispenses }
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
          onChange={ (e) => this.handleChangeDescription(e.target.value) }
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
          id="currency"
          role="combobox"
          name="currency"
          onChange={ (e) => this.handleChangeCurrency(e.target.value) }
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
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select id="payment" role="combobox" name="payment">
          <option value="money">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
      </label>
    );
  }

  createCategory() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" role="combobox" name="tag">
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
