import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.renderHeader = this.renderHeader.bind(this);
    this.renderValor = this.renderValor.bind(this);
    this.renderDescrição = this.renderDescrição.bind(this);
    this.renderMetodoDePagamento = this.renderMetodoDePagamento.bind(this);
    this.renderMoeda = this.renderMoeda.bind(this);
    this.renderCategoria = this.renderCategoria.bind(this);
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
    return (
      <label htmlFor="moeda">
        {' '}
        Moeda
        <select name="moeda" id="moeda">
          <option value="temporary">Temporary</option>
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

  render() {
    return (
      <div>
        TrybeWallet
        {this.renderHeader()}
        <form>
          {this.renderValor()}
          {this.renderDescrição()}
          {this.renderMoeda()}
          {this.renderMetodoDePagamento()}
          {this.renderCategoria()}
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
