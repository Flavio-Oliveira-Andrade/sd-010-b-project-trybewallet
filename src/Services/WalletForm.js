import React from 'react';

class WalletForm extends React.Component {
  render() {
    return (
      <form aria-controls="valor">
        <label htmlFor="valor">
          Valor
          <input id="valor" type="number" name="valor" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea id="description" type="text" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" name="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
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

export default WalletForm;
