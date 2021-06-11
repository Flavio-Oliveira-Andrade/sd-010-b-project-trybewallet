import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies as fetchCurrenciesThunk } from '../actions';
import getCurrency from '../services/requirements';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
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
        { this.renderCurrencies(currencies) }
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

  renderCurrencies(currencies) {
    return (
      <label htmlFor="moeda">
        Moeda
        <select name="moeda">
          { Object.keys(currencies).map((curr) => {
            if (curr !== 'USDT') {
            return (<option key={ curr } value={ curr }>{curr}</option>)
            }
          }) }
        </select>
      </label>
    );
  }

  renderLoading() {
    return (
      <p>Carregando...</p>
    );
  }

  render() {
    const { currencies, isFetching } = this.props;
    console.log(isFetching);
    if (isFetching === true) return this.renderLoading();
    console.log(this.renderForms());
    return this.renderForms();
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
