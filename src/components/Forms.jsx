import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';

class Forms extends Component {
  constructor() {
    super();

    this.state = {};

    this.getCurrency = this.getCurrency.bind(this);
  }

  componentDidMount() {
    const { fetchDispatch } = this.props;
    fetchDispatch();
  }

  getCurrency() {
    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency">
          {' '}
          {Object.keys(currencies).filter((currency) => currency !== 'USDT')
            .map((map$) => <option key={ map$ } value={ map$ }>{map$}</option>)}
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    return (
      <main>
        <form>

          <label htmlFor="amount">
            Valor
            <input type="number" name="amount" id="amount" />
          </label>

          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          {' '}
          {this.getCurrency}

          <label htmlFor="payment">
            Método de pagamento
            <select name="payment" id="payment">
              <option value="money">Dinheiro</option>
              <option value="credit card">Cartão de crédito</option>
              <option value="debit card">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
          <button
            className="add-expense"
            type="button"
            onClick={ () => {} }
          >
            Adicionar despesa
          </button>

        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDispatch: () => (dispatch(fetchAPI())),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Forms.propTypes = {
  currencies: PropTypes.objectOf.isRequired,
  fetchDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
