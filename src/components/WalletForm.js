import React from 'react';

const paymentMethodOptions = (
  <select id="payment-method">
    <option>
      Cartão de crédito
    </option>
    <option>
      Cartão de débito
    </option>
    <option>
      Dinheiro
    </option>
  </select>
);

const tagOptions = (
  <select id="tag">
    <option>
      Alimentação
    </option>
    <option>
      Lazer
    </option>
    <option>
      Saúde
    </option>
    <option>
      Trabalho
    </option>
    <option>
      Transporte
    </option>
  </select>
);

class WalletForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" placeholder="0" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            teste
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="payment-method">
          Método de Pagamento
          { paymentMethodOptions }
        </label>
        <label htmlFor="tag">
          Tag
          { tagOptions }
        </label>
      </form>
    );
  }
}

export default WalletForm;
