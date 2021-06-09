import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  inputValor() {
    return (
      <label htmlFor="idValor">
        Valor
        <input type="number" name="valor" id="idValor" />
      </label>);
  }

  inputdescripiton() {
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
        <select id="idPayment">
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  render() {
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
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
