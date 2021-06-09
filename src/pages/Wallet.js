import React from 'react';

import Header from './Header';

import '../App.css';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <form>
          <label htmlFor="input-valor">
            Valor:
            <input
              id="input-valor"
            />
          </label>
          <label htmlFor="input-descricao">
            Descrição:
            <input
              id="input-descricao"
            />
          </label>
          <label htmlFor="input-moeda">
            Moeda:
            <select id="input-moeda">
              select
            </select>
          </label>
          <label htmlFor="input-pagamento">
            Método de Pagamento:
            <select
              id="input-pagamento"
            >
              <option>Dinheiro</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="input-debito">
            Cartão de débito:
            <select
              id="input-debito"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default Wallet;
