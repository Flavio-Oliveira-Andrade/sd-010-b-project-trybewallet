import React from 'react';
import FormSelect from '../components/FormSelect';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const pagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const api = ['Dados da API'];
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor
            <input
              type="number"
              id="valor"
              data-testid="value-input"
              value={ 0 }
              // onChange={}
            />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input
              type="text"
              id="descrição"
              data-testid="description-input"
              // onChange={}
            />
          </label>
          <FormSelect
            texto="moeda"
            titulo="Moeda"
            testid="currency-input"
            array={ api }
          />
          <FormSelect
            texto="metodo"
            titulo="Método de pagamento"
            testid="method-input"
            array={ pagamento }
          />
          <FormSelect texto="tag" titulo="Tag" testid="tag-input" array={ tag } />
        </form>
      </div>
    );
  }
}

export default Wallet;
