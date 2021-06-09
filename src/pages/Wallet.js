import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.inputValor = this.inputValor.bind(this);
    this.inputDescripiton = this.inputDescripiton.bind(this);
    this.inputMoeda = this.inputMoeda.bind(this);
    this.inputPaymente = this.inputPaymente.bind(this);
    this.inputCategory = this.inputCategory.bind(this);
    this.inputHeader = this.inputHeader.bind(this);
  }

  inputValor() {
    return (
      <label htmlFor="idValor">
        Valor
        <input type="number" name="valor" id="idValor" />
      </label>);
  }

  inputDescripiton() {
    return (
      <label htmlFor="idDescription">
        Descrição
        <input type="number" name="description" id="idDescription" />
      </label>);
  }

  inputMoeda() {
    return (

      <label htmlFor="idMoeda">
        Moeda
        <select name="moeda" id="idMoeda">
          <option>nada</option>
        </select>
      </label>);
  }

  inputPaymente() {
    return (
      <label htmlFor="idPayment">
        Metodo de Pagamento
        <select name="Payment" id="idPayment">
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputCategory() {
    return (
      <label htmlFor="idCategory">
        Tag
        <select name="tag " id="idCategory">
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }

  inputHeader() {
    const { userEmail } = this.props;
    return (
      <>
        <h4 data-testid="email-field">{userEmail}</h4>
        <span data-testid="total-field">
          Despesa Total:
          {' '}
          {0}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </>
    );
  }

  render() {
    return (
      <>
        <header>
          {this.inputHeader()}
        </header>

        <forms>
          {this.inputValor()}
          {this.inputDescripiton()}
          {this.inputMoeda()}
          {this.inputPaymente()}
          {this.inputCategory()}
        </forms>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
