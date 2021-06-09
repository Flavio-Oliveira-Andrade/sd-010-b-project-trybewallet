import React from 'react';

class AddExpense extends React.Component {
  // ----------------- components ---------------------
  spend() {
    return (
      <label htmlFor="spent">
        valor:
        <input type="text" id="spent" />
      </label>
    );
  }

  coin() {
    return (
      <label htmlFor="coin">
        moeda:
        <select type="text" id="coin">
          <option value="USD">USD</option>
        </select>
      </label>
    );
  }

  paymentMethod() {
    return (
      <label htmlFor="paymentMethod">
        método de pagamento:
        <select type="text" id="paymentMethod">
          <option value="money">dinheiro</option>
          <option value="credit">cartão de crédito</option>
          <option value="debit">cartão de débito</option>
        </select>
      </label>
    );
  }

  tag() {
    return (
      <label htmlFor="tag">
        tag:
        <select type="text" id="tag">
          <option value="money">alimentação</option>
          <option value="credit">lazer</option>
          <option value="debit">trabalho</option>
          <option value="debit">transporte</option>
          <option value="debit">saúde</option>
        </select>
      </label>
    );
  }

  description() {
    return (
      <label htmlFor="description">
        descrição:
        <input type="" id="description" />
      </label>
    );
  }

  render() {
    return (
      <div className="add-dispense">
        <form>
          {this.spend()}
          {this.coin()}
          {this.paymentMethod()}
          {this.tag()}
          {this.description()}

        </form>
      </div>
    );
  }
}

export default AddExpense;
