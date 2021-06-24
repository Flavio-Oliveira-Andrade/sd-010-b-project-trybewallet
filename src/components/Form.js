import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getDataThunk } from '../actions/apiRequests';
import {
  addExpenseAction,
  editAction,
  editStateStatusOff } from '../actions/expensesActions';

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
    this.getRowEditionInfo = this.getRowEditionInfo.bind(this);
  }

  componentDidUpdate() {
    const { shouldEdit, changeEditionStatus } = this.props;
    if (shouldEdit) {
      console.log('entrou');
      this.getRowEditionInfo();
      changeEditionStatus(false);
    }
  }

  getRowEditionInfo() {
    const { editvalues } = this.props;
    console.log(editvalues);
    this.setState({ ...editvalues });
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
          value={ currency }
          onChange={ this.handleChange }
          name="currency"
          id="currency"
          data-testid="currency-input"
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
          value={ method }
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
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          value={ tag }
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
    const { shouldEdit } = this.props;
    if (!shouldEdit) {
      const { fetchData } = this.props;
      fetchData();
      const { addExpense, data } = this.props;
      delete data.USDT;
      this.setState({ exchangeRates: data }, () => {
        const { expenses } = this.props;
        addExpense(this.state);
        this.setState({ id: expenses.length + 1 });
      });
    } else {
      const { editedRow } = this.props;
      editedRow(this.state);
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { shouldEdit } = this.props;
    return (
      <form>
        {this.handleValueInput()}
        {this.handleDescriptionTextarea()}
        {this.handleCurrencyInput()}
        {this.handlePaymentMethod()}
        {this.handleTagInput()}
        <button type="button" onClick={ this.handleClick }>
          {!shouldEdit ? 'Adicionar despesa' : 'Editar Despesa'}
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  data: PropTypes.shape(Object),
  editvalues: PropTypes.arrayOf(Object),
};

Form.defaultProps = {
  data: PropTypes.shape(Object),
  editvalues: PropTypes.arrayOf(Object),
};

Form.propTypes = {
  currencies: PropTypes.arrayOf(String).isRequired,
  addExpense: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
  editedRow: PropTypes.func.isRequired,
  shouldEdit: PropTypes.bool.isRequired,
  changeEditionStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  data: state.wallet.data,
  expenses: state.wallet.expenses,
  editvalues: state.edit.editionKey,
  shouldEdit: state.edit.status,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (stateData) => dispatch(addExpenseAction(stateData)),
  fetchData: () => dispatch(getDataThunk()),
  editedRow: (stateData) => dispatch(editAction(stateData)),
  changeEditionStatus: (stateData) => dispatch(editStateStatusOff(stateData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
