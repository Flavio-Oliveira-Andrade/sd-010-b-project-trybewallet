import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.renderHeader = this.renderHeader.bind(this);
    this.renderValor = this.renderValor.bind(this);
    this.renderDescrição = this.renderDescrição.bind(this);
    this.renderMetodoDePagamento = this.renderMetodoDePagamento.bind(this);
    this.renderMoeda = this.renderMoeda.bind(this);
    this.renderCategoria = this.renderCategoria.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  componentDidMount() {
    const { moedasApi } = this.props;
    moedasApi();
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Boas vindas
          {' '}
          {email}
          {' '}
        </p>
        {' '}
        <br />
        {' '}
        <div data-testid="total-field">
          Despesa Total:
          { 0 }
          {' '}
        </div>
        <span data-testid="header-currency-field">BRL</span>
      </header>);
  }

  renderValor() {
    return (
      <label htmlFor="valor">
        {' '}
        Valor
        <input type="text" name="valor" id="valor" />
      </label>
    );
  }

  renderDescrição() {
    return (
      <label htmlFor="descrição">
        {' '}
        Descrição
        <input type="text" name="descrição" id="descrição" />
      </label>
    );
  }

  renderMoeda() {
    const { moedas } = this.props;
    const usdtIndex = moedas.findIndex((el) => el === 'USDT');
    moedas.splice(usdtIndex, 1);
    return (
      <label htmlFor="moeda">
        {' '}
        Moeda
        <select name="moeda" id="moeda">
          {moedas.map((moeda, index) => (
            <option key={ index } value={ moeda }>{moeda}</option>
          ))}
        </select>
      </label>
    );
  }

  renderMetodoDePagamento() {
    return (
      <label htmlFor="metodoDePagamento">
        {' '}
        Método de Pagamento
        <select name="metodoDePagamento" id="metodoDePagamento">
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de Crédito</option>
          <option value="debito">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  renderCategoria() {
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" id="tag">
          <option value="alimentação">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderForm() {
    return (
      <form>
        {this.renderValor()}
        {this.renderDescrição()}
        {this.renderMoeda()}
        {this.renderMetodoDePagamento()}
        {this.renderCategoria()}
      </form>
    );
  }

  render() {
    const { moedas, isFetching } = this.props;
    return (
      <div>
        TrybeWallet
        {this.renderHeader()}
        { (moedas === undefined || isFetching)
          ? <h1> Carregando... </h1> : this.renderForm() }
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  moedas: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  moedasApi: () => dispatch(fetchApi()),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
