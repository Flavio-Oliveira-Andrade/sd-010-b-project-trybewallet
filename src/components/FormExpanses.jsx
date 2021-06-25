import React from 'react';

class FormExpanses extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor" id="valor">
          Valor
          <input type="text" name="valor" aria-labelledby="valor" />
        </label>
        <label htmlFor="descrição" id="descrição">
          Descrição
          <textarea type="text" name="descrição" aria-labelledby="descrição" />
        </label>
        <label htmlFor="moeda" id="moeda">
          Moeda
          <select
            name="moeda"
            aria-labelledby="moeda"
          >
            <option value="Vazio">Vazio</option>
          </select>
        </label>
        <label htmlFor="paymentType" id="paymentType">
          Método de pagamento
          <select
            name="paymentType"
            aria-labelledby="paymentType"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag" id="tag">
          Tag
          <select
            name="tag"
            aria-labelledby="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormExpanses;
