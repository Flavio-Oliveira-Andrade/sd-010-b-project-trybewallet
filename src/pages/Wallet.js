import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.renderHeader = this.renderHeader.bind(this);
    this.renderValueLabel = this.renderValueLabel.bind(this);
    this.renderDescriptionLabel = this.renderDescriptionLabel.bind(this);
    this.renderCurrencySelect = this.renderCurrencySelect.bind(this);
    this.renderPaymentMethodSelect = this.renderPaymentMethodSelect.bind(this);
    this.renderExpenseCategorySelect = this.renderExpenseCategorySelect.bind(this);
  }

  renderHeader() {
    const { email/* , currencies, expenses */ } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        {/* <span data-testid="total-field">{ `R$ ${currencies - expenses}` }</span> */}
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }

  renderValueLabel() {
    return (
      <label htmlFor="valor">
        Valor:
        <input type="text" name="valor" id="valor" />
      </label>
    );
  }

  renderDescriptionLabel() {
    return (
      <label htmlFor="descricao">
        Descrição:
        <input type="text" name="descrição" id="descricao" />
      </label>
    );
  }

  renderCurrencySelect() {
    return (
      <label htmlFor="moeda">
        Moeda:
        <select id="moeda" name="moeda">
          <option value=""> </option>
        </select>
      </label>
    );
  }

  renderPaymentMethodSelect() {
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select id="paymentMethod" name="metodoDePagamento">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderExpenseCategorySelect() {
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag" name="tag">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <>
        { this.renderHeader() }
        <form>
          { this.renderValueLabel() }
          { this.renderDescriptionLabel() }
          { this.renderCurrencySelect() }
          { this.renderPaymentMethodSelect() }
          { this.renderExpenseCategorySelect() }
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ user: { email }/* ,wallet: { currencies, expenses } */ }) => ({
  email,
  /* currencies,
  expenses, */
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
