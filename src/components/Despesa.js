import React from 'react';

const pgto = () => (
  <select
    data-testid="method-input"
    id="pgto"
  >
    <option key="dinheiro" value="Dinheiro">Dinheiro</option>
    <option key="Cartão de crédito" value="Cartão de crédito"> Cartão de crédito </option>
    <option value="Cartão de débito" key="Cartão de débito">Cartão de débito</option>
  </select>
);

const tag = () => (
  <select data-testid="tag-input" id="tag">
    <option value="Alimentação">Alimentação</option>
    <option value="Lazer">Lazer</option>
    <option value="Trabalho">Trabalho</option>
    <option value="Transporte">Transporte</option>
    <option value="Saúde">Saúde</option>
  </select>
);

function Despesa() {
  return (
    <form>
      <label htmlFor="valor">
        Valor
        <input
          type="text"
          data-testid="value-input"
          id="valor"
        />
      </label>
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          id="descricao"
          data-testid="description-input"
        />
      </label>
      <label
        htmlFor="moeda"
      >
        Moeda
        <select
          data-testid="currency-input"
          id="moeda"
        >
          <option
            data-testid=""
          >
            {}
          </option>
        </select>
      </label>
      <label
        htmlFor="pgto"
      >
        Método de pagamento
        {pgto()}
      </label>
      <label
        htmlFor="tag"
      >
        Tag
        {tag()}
      </label>
    </form>
  );
}

export default Despesa;
