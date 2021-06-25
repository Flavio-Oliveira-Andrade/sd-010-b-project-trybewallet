import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions/walletActions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: 0,
      // value: 0,
      // description: '',
      // currency: '',
      // method: '',
      // tag: '',
    };
  }

  componentDidMount() {
    const { formSaveCurrencies } = this.props;
    formSaveCurrencies();
  }

  functionValue() {
    return (
      <label htmlFor="value">
        Valor
        <input
          type="text"
          id="value"
          data-testid="value-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  functionDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          data-testid="description-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  functionCurrency() {
    const { getCurrency } = this.props;
    const currenciesKeys = Object.keys(getCurrency);

    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          data-testid="currency-input"
          onChange={ this.handleChange }
        >
          {
            currenciesKeys.map((currency, key) => (
              <option key={ key } value={ currency }>{currency}</option>))
          }
        </select>
      </label>
    );
  }

  functionMethod() {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          data-testid="method-input"
          onChange={ this.handleChange }
        >
          <option value="1">Dinheiro</option>
          <option value="2">Cartão de crédito</option>
          <option value="2">Cartão de débito</option>
        </select>
      </label>
    );
  }

  functionTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          <option value="1">Alimentação</option>
          <option value="2">Lazer</option>
          <option value="2">Trabalho</option>
          <option value="2">Transporte</option>
          <option value="2">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.functionValue() }
        { this.functionDescription() }
        { this.functionCurrency() }
        { this.functionMethod() }
        { this.functionTag() }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  getCurrency: state.wallet.currencies,
});

const mapDispathToProps = (dispatch) => ({
  formSaveCurrencies: () => dispatch(fetchAPI()),
});

Form.propTypes = {
  formSaveCurrencies: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(Form);
