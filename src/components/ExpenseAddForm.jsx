import React from 'react';
// import CURRENCY from '../services/API';

class ExpenseAddForm extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     Moedas: [],
  //   };
  // }

  // async componentDidMount() {
  //   this.renderCurrencySelect(await CURRENCY());
  // }

  // renderCurrencySelect(currencies) {
  //   const Moedas = Object.keys(currencies);
  //   this.setState({
  //     Moedas,
  //   });
  // }

  render() {
    // const { Moedas } = this.state;
    return (
      <form method="get">
        <label htmlFor="valueExpense">
          Valor
          <input type="text" id="valueExpense" />
        </label>
        <label htmlFor="descriptionExpense">
          Descrição
          <input type="text" id="descriptionExpense" />
        </label>
        <label htmlFor="currencies">
          Moeda
          <select id="currencies">
            {/* {Moedas.map((moeda) => (
              <option value={ moeda } key={ moeda }>
                {' '}
                { moeda }
                {' '}
              </option>
            ))} */}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option value="">Dinheiro</option>
            <option value="">Cartão de crédito</option>
            <option value="">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select id="category">
            <option value="">Alimentação</option>
            <option value="">Lazer</option>
            <option value="">Trabalho</option>
            <option value="">Transporte</option>
            <option value="">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default ExpenseAddForm;
