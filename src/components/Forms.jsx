import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies as fetchCurrenciesThunk } from '../actions';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currencies: [],
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  renderForms() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="desc">
          Descrição
          <input type="text" id="desc" />
        </label>
        { this.renderCurrencies(currencies) }
        <label htmlFor="pay">
          Método de pagamento
          <select id="pay">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button">
          Adicionar despesa
        </button>
      </form>
    );
  }

  renderCurrencies(currencies) {
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda">
          { Object.keys(currencies).map((curr) => {
            if (curr !== 'USDT') {
              return (<option key={ curr } value={ curr }>{curr}</option>);
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
    const { isFetching } = this.props;
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

Forms.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.shape().isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
