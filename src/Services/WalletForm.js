import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpense } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.currencyAPI = this.currencyAPI.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.goSub = this.goSub.bind(this);
  }

  componentDidMount() {
    this.currencyAPI();
  }

  async currencyAPI() {
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => this.setState({
        currencies: Object.keys(response),
      }));
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  async goSub(action) {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((resultado) => resultado);
    const { id, value, description, currency, method, tag } = this.state;
    const expenseObj = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: result,
    };
    await action(expenseObj);
    const idPlus = id + 1;
    this.setState({
      id: idPlus,
    });
  }

  render() {
    const { SES } = this.props;
    const { currencies } = this.state;
    return (
      <form aria-controls="value">
        <label htmlFor="value">
          Valor
          <input
            onChange={ this.handleChange }
            id="value"
            type="number"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea onChange={ this.handleChange } id="description" type="text" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select onChange={ this.handleChange } id="currency">
            {currencies.map((currency) => (
              currency === 'USDT' ? null
                : (<option key={ currency }>{currency}</option>)
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select placeholder="Escolha" onChange={ this.handleChange } id="method">
            <option disabled selected> - selecione - </option>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.handleChange } id="tag">
            <option disabled selected> - selecione - </option>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ () => this.goSub(SES) }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  SES: (item) => dispatch(saveExpense(item)),
});

WalletForm.propTypes = {
  SES: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(WalletForm);
