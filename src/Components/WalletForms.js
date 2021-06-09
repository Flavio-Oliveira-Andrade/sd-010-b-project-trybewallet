import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForms extends Component {
  render() {
    const { currencies } = this.props;
    console.log(Object.keys(currencies));
    return (
      <form>
        <label htmlFor="input-valor">
          Valor
          <input id="input-valor" type="number" name="valor" />
        </label>

        <label htmlFor="input-descricao">
          Descrição
          <input id="input-descricao" type="text" name="descricao" />
        </label>

        <label htmlFor="select-moeda">
          Moeda
          <select id="select-moeda" name="moeda">
            {Object.keys(currencies)
              .map((currency) => (currency !== 'USDT'
                ? <option>{currency}</option> : null))}
          </select>
        </label>

        <label htmlFor="select-pagamento">
          Método de pagamento
          <select id="select-pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="select-categoria">
          Tag
          <select id="select-categoria">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForms);
