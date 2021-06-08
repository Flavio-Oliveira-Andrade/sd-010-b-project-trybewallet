import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchCurrency,
  fetchCurrencyList,
  updateAuthorized,
} from '../actions/index';
import { paymentArr, tagsArr } from '../services/currencyData';

const initialState = {
  value: '0',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Aliementação',
  description: '',
};

class FormExpenses extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValue = this.handleValue.bind(this);

    this.state = {
      ...initialState,
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fetchCurrData, bool, updateAuth } = this.props;
    if (bool) {
      updateAuth(this.state);
    } else {
      fetchCurrData(this.state);
    }
    this.setState({ ...initialState });
  }

  handleValue({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  handleValueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="expenses">
        Valor:
        <input
          onChange={ this.handleValue }
          name="value"
          id="expenses"
          type="number"
          data-testid="value-input"
          value={ value }
        />
      </label>
    );
  }

  handleCurrInput() {
    const { currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          onChange={ this.handleValue }
          name="currency"
          id="currency"
          data-testid="currency-input"
        >
          {currencies.map((curr, index) => (
            <option key={ index } data-testid={ curr }>
              {curr}
            </option>
          ))}
        </select>
      </label>
    );
  }

  handlePaymentValue() {
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          onChange={ this.handleValue }
          name="method"
          id="method"
          data-testid="method-input"
        >
          {paymentArr.map((meth, index) => (
            <option key={ index }>{meth}</option>
          ))}
        </select>
      </label>
    );
  }

  handleTagValue() {
    return (
      <label htmlFor="tag">
        Tag:
        <select
          onChange={ this.handleValue }
          name="tag"
          id="tag"
          data-testid="tag-input"
        >
          {tagsArr.map((tag, index) => (
            <option key={ index }>{tag}</option>
          ))}
        </select>
      </label>
    );
  }

  handleDescription() {
    return (
      <label htmlFor="description">
        Descrição:
        <input
          onChange={ this.handleValue }
          name="description"
          id="description"
          type="text"
          data-testid="description-input"
        />
      </label>
    );
  }

  render() {
    const { bool } = this.props;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          {this.handleValueInput()}
          {this.handleCurrInput()}
          {this.handlePaymentValue()}
          {this.handleTagValue()}
          {this.handleDescription()}
          <button type="submit">
            {!bool ? 'Adicionar despesa' : 'Editar despesa'}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  bool: state.wallet.bool,
  upDateItemId: state.wallet.upDateItemId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrData: (desc) => dispatch(fetchCurrency(desc)),
  fetchCurrencies: () => dispatch(fetchCurrencyList()),
  updateAuth: (obj) => dispatch(updateAuthorized(obj)),
});

FormExpenses.defaultProps = {
  bool: '',
};

FormExpenses.propTypes = {
  fetchCurrData: PropTypes.func.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  bool: PropTypes.string,
  updateAuth: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
