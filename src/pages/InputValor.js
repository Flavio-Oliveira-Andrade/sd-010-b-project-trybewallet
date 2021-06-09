import React from 'react';

class InputValor extends React.Component {
  redner() {
    return (
      <section>
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
              data-testid=""
              id="input-descricao"
            />
          </label>
          <label htmlFor="input-select">
            Moeda:
            <select
              data-testid=""
              id="input-select"
            >
              select

            </select>
          </label>
          <label htmlFor="input-pagamento">
            Método de Pagamento:
            <select
              data-testid=""
              id="input-pagamento"
            >
              select

            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default InputValor;
