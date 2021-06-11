import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda">
            <option>aaa</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag">
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

export default Form;
