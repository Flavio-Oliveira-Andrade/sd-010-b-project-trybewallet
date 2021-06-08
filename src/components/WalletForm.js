import React from 'react';

const paymentMethodOptions = (
  <select>
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
  <select>
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
          <select>
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
        <label htmlFor="payment-method">
          Tag
          { tagOptions }
        </label>
      </form>
    );
  }
}

export default WalletForm;
