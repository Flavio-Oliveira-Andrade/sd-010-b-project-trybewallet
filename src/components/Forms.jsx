import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
// import PropTypes from 'prop-types';

class Forms extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { fetchDispatch } = this.props;
    fetchDispatch();
  }

  render() {
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

          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency">
              {}
              <option value="BRL">BRL</option>
            </select>
          </label>

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

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
