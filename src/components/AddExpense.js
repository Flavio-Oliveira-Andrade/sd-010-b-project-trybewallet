import React from 'react';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayObjCoin: [],
    };

    this.coin = this.coin.bind(this);
  }

  componentDidMount() {
    this.getCoin();
  }

  async getCoin() {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const arrayCoins = await data.json();
    delete arrayCoins.USDT;

    const arrayObjCoin = Object.values(arrayCoins);
    this.setState({ arrayObjCoin });
  }

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
    const { arrayObjCoin } = this.state;

    return (
      <label htmlFor="coin">
        moeda:
        <select type="text" id="coin">
          {arrayObjCoin.map(({ code }, i) => (
            <option key={ i } value={ code }>{code}</option>
          ))}
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
