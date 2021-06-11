import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ userEmail }</p>
        <label htmlFor="input-despesa-total">
          Despesas totais:
          <input
            name="input-despesa-total"
            type="number"
            value="0"
            data-testid="total-field"
          />
        </label>
        <label htmlFor="actual-currency">
          Moeda atual:
          <select name="actual-currency" data-testid="header-currency-field">
            <option value="BRL">BRL</option>
          </select>
        </label>
        <form>
          <label>
            Valor:
            <input type="number" name="valor-despesa" />
          </label>
          <label>
            Descrição:
            <input type="text" name="descricao-despesa" />
          </label>
          <label>
            Moeda:
            <select type="text" name="select-moeda">
              
            </select>
          </label>
          <label>
            Método de pagamento:
            <select type="text" name="metodo-pagamento-despesa">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao-de-credito">Cartão de crédito</option>
              <option value="cartao-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label>
            Tag:
            <select type="text" name="categoria-despesa">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </header>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
