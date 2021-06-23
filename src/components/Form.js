import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getDataThunk } from '../actions/apiRequests';
import addExpenseAction from '../actions/addExpenseAction';

const intitialState = {
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
    const { expenses } = this.props;
    this.state = { id: expenses.length, ...intitialState };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleValueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          name="value"
          onChange={ this.handleChange }
          type="text"
          id="value"
          data-testid="value-input"
          value={ value }
        />
      </label>);
  }

  handleDescriptionTextarea() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <textarea
          name="description"
          onChange={ this.handleChange }
          type="text"
          id="description"
          data-testid="description-input"
          value={ description }
        />
      </label>);
  }

  handleCurrencyInput() {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          onChange={ this.handleChange }
          name="currency"
          id="currency"
          data-testid="currency-input"
          value={ currency }
        >
          {currencies
            .map((bit) => (bit !== 'USDT' ? <option key={ bit }>{bit}</option> : null))}
        </select>
      </label>
    );
  }

  handlePaymentMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          onChange={ this.handleChange }
          name="method"
          id="method"
          data-testid="method-input"
          value={ method }
        >
          <option name="method">Dinheiro</option>
          <option name="method">Cartão de crédito</option>
          <option name="method">Cartão de débito</option>
        </select>
      </label>);
  }

  handleTagInput() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          onChange={ this.handleChange }
          name="tag"
          id="tag"
          data-testid="tag-input"
          value={ tag }
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
    delete data.USDT;
    this.setState({ exchangeRates: data }, () => {
      const { expenses } = this.props;
      addExpense(this.state);
      this.setState({ id: expenses.length + 1 });
    });
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
  data: PropTypes.shape(Object),
};

Form.defaultProps = {
  data: PropTypes.shape(Object),
};

Form.propTypes = {
  currencies: PropTypes.arrayOf(String).isRequired,
  addExpense: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  data: state.wallet.data,
  expenses: state.wallet.expenses,
  editvalues: state.wallet.editionKey,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (stateData) => dispatch(addExpenseAction(stateData)),
  fetchData: () => dispatch(getDataThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
