import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi, requestExpenses } from '../actions';

class FormsDespesa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      tag: 'Alimentação',
      method: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.addDispesa = this.addDispesa.bind(this);
    this.renderValueLabel = this.renderValueLabel.bind(this);
    this.renderDescriptionLabel = this.renderDescriptionLabel.bind(this);
    this.renderCurrencyLabel = this.renderCurrencyLabel.bind(this);
    this.renderPaymentLabel = this.renderPaymentLabel.bind(this);
    this.renderTagLabel = this.renderTagLabel.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.fetchExchangeRates = this.fetchExchangeRates.bind(this);
  }

  componentDidMount() {
    const { Apifetch } = this.props;
    Apifetch();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async fetchExchangeRates() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    this.setState({ exchangeRates: data });
  }

  async addDispesa() {
    await this.fetchExchangeRates();
    const { keepForm } = this.props;
    keepForm(this.state);
    this.setState((oldState) => ({ id: oldState.id + 1 }));
  }

  renderValueLabel() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="text"
          name="value"
          id="value"
          value={ value }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>);
  }

  renderDescriptionLabel() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>);
  }

  renderCurrencyLabel() {
    const { currencies } = this.props;
    const { currency } = this.state;
    const curren = currencies.filter((c) => c !== 'USDT');
    return (

      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ (e) => this.handleChange(e) }
        >
          {curren.map((curr, index) => (
            <option key={ index } value={ curr }>{curr}</option>
          ))}
        </select>
      </label>);
  }

  renderPaymentLabel() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ (e) => this.handleChange(e) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de débito">Cartão de débito</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
        </select>
      </label>);
  }

  renderTagLabel() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ (e) => this.handleChange(e) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>);
  }

  renderButton() {
    return (
      <button
        onClick={ () => this.addDispesa() }
        type="button"
      >
        Adicionar Despesa
      </button>);
  }

  render() {
    return (
      <form>
        {this.renderValueLabel()}
        ;
        {this.renderDescriptionLabel()}
        ;
        {this.renderCurrencyLabel()}
        ;
        {this.renderPaymentLabel()}
        ;
        {this.renderTagLabel()}
        ;
        {this.renderButton()}
        ;
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  Apifetch: () => dispatch(fetchApi()),
  keepForm: (expense) => dispatch(requestExpenses(expense)),
});

FormsDespesa.propTypes = {
  Apifetch: PropTypes.func.isRequired,
  keepForm: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};

// export default FormsDespesa;
export default connect(mapStateToProps, mapDispatchToProps)(FormsDespesa);
