import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI, submitExpense } from '../actions';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.renderValueLabel = this.renderValueLabel.bind(this);
    this.renderDescriptionLabel = this.renderDescriptionLabel.bind(this);
    this.renderCurrencySelect = this.renderCurrencySelect.bind(this);
    this.renderPaymentMethodSelect = this.renderPaymentMethodSelect.bind(this);
    this.renderExpenseCategorySelect = this.renderExpenseCategorySelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  async handleSubmit(e) {
    const { getExchanges, saveExpense } = this.props;
    e.preventDefault();
    await getExchanges();
    saveExpense(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  renderValueLabel() {
    const { value } = this.state;
    return (
      <label htmlFor="valor">
        Valor:
        <input
          type="text"
          name="value"
          id="valor"
          value={ value }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderDescriptionLabel() {
    const { description } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição:
        <input
          type="text"
          name="description"
          id="descricao"
          value={ description }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderCurrencySelect() {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="moeda">
        Moeda:
        <select
          id="moeda"
          name="currency"
          value={ currency }
          onChange={ (e) => this.handleChange(e) }
        >
          {currencies.map((code) => (
            <option key={ code }>{code}</option>
          ))}
        </select>
      </label>
    );
  }

  renderPaymentMethodSelect() {
    const { method } = this.state;
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select
          id="paymentMethod"
          name="method"
          value={ method }
          onChange={ (e) => this.handleChange(e) }
        >
          <option value=" ">Selecione</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderExpenseCategorySelect() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          name="tag"
          value={ tag }
          onChange={ (e) => this.handleChange(e) }
        >
          <option value=" ">Selecione</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        {this.renderValueLabel()}
        {this.renderDescriptionLabel()}
        {this.renderCurrencySelect()}
        {this.renderPaymentMethodSelect()}
        {this.renderExpenseCategorySelect()}
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (requirement = 'getCurrencies') => dispatch(fetchAPI(requirement)),
  getExchanges: (requirement = 'getExchanges') => dispatch(fetchAPI(requirement)),
  saveExpense: (expense) => dispatch(submitExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  getExchanges: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
};
