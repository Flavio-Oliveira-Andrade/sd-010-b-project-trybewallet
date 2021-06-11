import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionNewExpense } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.getCoinsName = this.getCoinsName.bind(this);
    this.coinsToState = this.coinsToState.bind(this);

    this.state = {
      coinType: [],
    };
  }

  componentDidMount() {
    this.coinsToState();
  }

  async getCoinsName() {
    const coins = await fetch('https://economia.awesomeapi.com.br/json/all');
    const coinsJson = await coins.json();
    delete coinsJson.USDT;

    return coinsJson;
  }

  async coinsToState() {
    const coins = await this.getCoinsName();
    this.setState({ coinType: Object.keys(coins) });
  }

  // Função que tem como "inspiração" o projeto do estudante limapaulobsb
  handleClick() {
    const { newExpense, expenses } = this.props;
    let id = 0;
    if (expenses.length > 0) {
      id = expenses.length - 1 + 1;
    }

    const payload = {
      id,
      value: document.getElementById('valor').value,
      description: document.getElementById('descricao').value,
      currency: document.getElementById('moeda').value,
      method: document.getElementById('metodo').value,
      tag: document.getElementById('tag').value,
    };

    newExpense(payload);
  }

  form() {
    const { coinType } = this.state;

    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="name" id="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input type="text" name="name" id="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {coinType.map((coin) => (
              <option
                key={ coin }
                value={ coin }
              >
                {coin}
              </option>))}
          </select>
        </label>

        <label htmlFor="metodo">
          Método de pagamento
          <select id="metodo">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select id="tag">
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

  calcTotal(expenses) {
    const total = expenses.reduce((acc, curr) => {
      const rate = curr.exchangeRates[curr.currency].ask;
      return acc + curr.value * rate;
    }, 0);
    return total;
  }

  render() {
    const { userEmailState, expenses } = this.props;

    return (
      <main>
        <header>
          <p
            data-testid="email-field"
          >
            Email:
            {' '}
            {userEmailState}
          </p>
          <p data-testid="total-field">{this.calcTotal(expenses)}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>

        {this.form()}

        <button
          type="button"
          onClick={ () => this.handleClick() }
        >
          Adicionar despesa
        </button>
      </main>
    );
  }
}

Wallet.propTypes = {
  userEmailState: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  newExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  newExpense: (item) => dispatch(actionNewExpense(item)),
});

const mapStateToProps = (state) => ({
  userEmailState: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
