import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk } from '../actions';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            {currencies.map((currency) => (
              <option value={ currency } key={ currency }>{currency}</option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option value="Dinheiro">Dinheiro</option>
            <option value="credit-card">cartão de crédito</option>
            <option value="debit">cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select name="category" id="category">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);

Forms.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
