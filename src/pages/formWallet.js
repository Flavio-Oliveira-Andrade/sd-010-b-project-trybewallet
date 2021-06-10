import React from 'react';

class Formulario extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              type="text"
              name="value"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              type="text"
              name="description"
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" name="currency">
              <option value="moeda">BRL</option>
            </select>
          </label>

          <label htmlFor="payment">
            Método de pagamento
            <select id="payment" name="payment">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag">
              <option value="comida">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="tranporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}
export default Formulario;
