import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" name="valor" type="number" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea id="descricao" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda">
            <option> </option>
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de pagamento
          <select id="método de pagamento" name="método de pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar Despesa</button>
      </form>
    );
  }
}

export default Form;
