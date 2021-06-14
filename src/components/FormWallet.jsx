import React from 'react';

class FormWallet extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          {' '}
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          {' '}
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          {' '}
          <select id="moeda">
            <option value="moeda">Moeda</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          {' '}
          <select id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          {' '}
          <select id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormWallet;
