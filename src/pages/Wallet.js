import React from 'react';

import './wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
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
        <div />
      </>
    );
  }
}

export default Wallet;
