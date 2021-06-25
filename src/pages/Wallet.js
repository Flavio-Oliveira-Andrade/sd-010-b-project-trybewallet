import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <h4 data-testid="email-field">
            {` ${email}`}
          </h4>
          <h4 data-testid="total-field">
            0
          </h4>
          <h4 data-testid="header-currency-field">
            BRL
          </h4>
        </header>
        <form>
          <label htmlFor="input-despesa">
            Valor
            <input type="number" name="input-despesa" id="input-despesa" />
          </label>
          <label htmlFor="input-descri-despesa">
            Descrição
            <input type="text" name="input-descri-despesa" id="input-descri-despesa" />
          </label>
          <label htmlFor="select-moeda">
            Moeda
            <select id="select-moeda" name="select-moeda">
              <option value="BRL">BRL</option>
            </select>
          </label>
          <label htmlFor="input-metodo-pgto">
            Método de pagamento
            <select name="input-metodo-pgto" id="input-metodo-pgto">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-tag">
            Tag
            <select name="input-tag" id="input-tag">
              <option value="dinheiro">Alimentação</option>
              <option value="credito">Lazer</option>
              <option value="debito">Trabalho</option>
              <option value="debito">Transporte</option>
              <option value="debito">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
