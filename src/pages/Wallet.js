import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
            <input type="select" name="moeda" />
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select>
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

export default Wallet;
