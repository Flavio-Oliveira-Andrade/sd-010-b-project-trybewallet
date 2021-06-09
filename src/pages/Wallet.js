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
              data-testid=""
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
            Método de Pagamento:
            <select
              id="input-moeda"
            >
              select
            </select>
          </label>
          <label htmlFor="input-pagamento">
            Método de Pagamento:
            <select
              id="input-pagamento"
            >
              select
            </select>
          </label>
          <label htmlFor="input-debito">
            Cartão de débito:
            <select
              id="input-debito"
            >
              select
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default Wallet;
