import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import getCurrency from '../services/requirements';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    const { fetchMoedasThunk } = this.props;
    fetchMoedasThunk();
  }

  renderForms() {
    const { currencies, isFetching } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" name="value" />
        </label>
        <label htmlFor="desc">
          Descrição
          <input type="text" name="desc" />
        </label>
        {console.log(currencies)}
        {/* { this.renderCurrency() } */}
        {/* <label htmlFor="moeda">
          Moeda
          <select name="moeda">
            <option value="lint">lint</option>
          </select>
        </label> */}
        <label htmlFor="pay">
          Método de pagamento
          <select name="pay">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="desc">
          Tag
          <select>
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

  render() {
    const { currencies, isFetching } = this.props;
    return (
      <p>loading...</p>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoedasThunk: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
