import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class EditExpense extends Component {
  constructor(props) {
    super(props);
    const { expenses, match: { params: { id } } } = this.props;
    const editExpense = expenses[id];
    this.state = editExpense;
    this.renderValueLabel = this.renderValueLabel.bind(this);
    this.renderDescriptionLabel = this.renderDescriptionLabel.bind(this);
    this.renderCurrencySelect = this.renderCurrencySelect.bind(this);
    this.renderPaymentMethodSelect = this.renderPaymentMethodSelect.bind(this);
    this.renderExpenseCategorySelect = this.renderExpenseCategorySelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /* componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  } */

  async handleSubmit(e) {
    const { getExchanges, saveExpense } = this.props;
    e.preventDefault();
    await getExchanges();
    saveExpense(this.state);
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
          data-tesid="value-input"
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
          data-tesid="description-input"
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
          data-tesid="currency-input"
        >
          {currencies.map((code, index) => (
            <option key={ index }>{code}</option>
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
          data-tesid="method-input"
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
          data-tesid="tag-input"
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
        <button type="submit">Editar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getExchanges: (requirement = 'getExchanges') => dispatch(fetchAPI(requirement)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);

EditExpense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  getExchanges: PropTypes.func.isRequired,
};
