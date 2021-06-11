import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div>
        <form>
          <label htmlFor="valor-despesa">
            Valor:
            <input type="number" name="valor-despesa" />
          </label>
          <label htmlFor="descricao-despesa">
            Descrição:
            <input type="text" name="descricao-despesa" />
          </label>
          <label htmlFor="select-moeda">
            Moeda:
            <select type="text" name="select-moeda">
              <option value="exemplo">exemplo</option>
            </select>
          </label>
          <label htmlFor="metodo-pagamento-despesa">
            Método de pagamento:
            <select type="text" name="metodo-pagamento-despesa">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao-de-credito">Cartão de crédito</option>
              <option value="cartao-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-despesa">
            Tag:
            <select type="text" name="tag-despesa">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
