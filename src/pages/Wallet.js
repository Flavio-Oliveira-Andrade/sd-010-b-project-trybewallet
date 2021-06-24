import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurrencies } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentDidMount() {
    const { moedasApi } = this.props;
    moedasApi();
  }

  renderValue() {
    return (
      <label htmlFor="value">
        {' '}
        Valor
        <input type="text" text="valor" id="value" name="value" />
      </label>
    );
  }

  renderDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input type="text" name="description" id="description" />
      </label>
    );
  }

  renderCurrency() {
    const { moedas } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" type="combobox">
          {console.log(moedas)}
          { moedas.map((currency, index) => (
            <option key={ index } value={ currency }>
              { currency }
            </option>)) }
        </select>
      </label>
    );
  }

  renderMethod() {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select id="method">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    return (
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
    );
  }

  renderForm() {
    return (
      <form>
        {this.renderValue()}
        {this.renderDescription()}
        {this.renderCurrency()}
        {this.renderMethod()}
        {this.renderTag()}
      </form>
    );
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Email:
          {' '}
          {email}
          <br />
        </p>
        <p data-testid="total-field">
          0
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }

  render() {
    return (
      <div>
        TrybeWallet
        {this.renderHeader()}
        {this.renderForm()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  moedas: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  moedasApi: () => dispatch(fetchApiCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
