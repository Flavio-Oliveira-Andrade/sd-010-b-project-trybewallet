import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getDataThunk } from '../actions/apiRequests';
import addExpenseAction from '../actions/addExpenseAction';

const intitialState = {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {},
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...intitialState };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleValueInput() {
    return (
      <label htmlFor="value">
        Valor:
        <input
          name="value"
          onChange={ this.handleChange }
          type="text"
          id="value"
          data-testid="value-input"
        />
      </label>);
  }

  handleDescriptionTextarea() {
    return (
      <label htmlFor="description">
        Descrição:
        <textarea
          name="description"
          onChange={ this.handleChange }
          type="text"
          id="description"
          data-testid="description-input"
        />
      </label>);
  }

  handleCurrencyInput() {
    const { currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          onChange={ this.handleChange }
          name="currency"
          id="currency"
          data-testid="currency-input"
        >
          {currencies
            .map((moeda) => (moeda !== 'USDT' ? <option>{moeda}</option> : null))}
        </select>
      </label>
    );
  }

  handlePaymentMethod() {
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          onChange={ this.handleChange }
          name="method"
          id="method"
          data-testid="method-input"
        >
          <option name="method">Dinheiro</option>
          <option name="method">Cartão de crédito</option>
          <option name="method">Cartão de débito</option>
        </select>
      </label>);
  }

  handleTagInput() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          onChange={ this.handleChange }
          name="tag"
          id="tag"
          data-testid="tag-input"
        >
          <option name="tag">Alimentação</option>
          <option name="tag">Lazer</option>
          <option name="tag">Trabalho</option>
          <option name="tag">Transporte</option>
          <option name="tag">Saúde</option>
        </select>
      </label>);
  }

  handleClick() {
    const { fetchData } = this.props;
    fetchData();
    const { addExpense, data } = this.props;
    this.setState({ exchangeRates: data }, () => addExpense(this.state));
    this.setState((previousState) => ({ id: previousState.id + 1, exchangeRates: data }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        {this.handleValueInput()}
        {this.handleDescriptionTextarea()}
        {this.handleCurrencyInput()}
        {this.handlePaymentMethod()}
        {this.handleTagInput()}
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.string.isRequired,
  addExpense: PropTypes.func.isRequired,
  data: PropTypes.shape(Object).isRequired,
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  data: state.wallet.data,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (stateData) => dispatch(addExpenseAction(stateData)),
  fetchData: () => dispatch(getDataThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
