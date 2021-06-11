import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionExpenses, fetchCoin } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.selectCoins = this.selectCoins.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.totalDespesas = this.totalDespesas.bind(this);
    this.renderSelects = this.renderSelects.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { coinFetch } = this.props;
    coinFetch();
  }

  selectCoins() {
    const { coinArray } = this.props;
    if (coinArray !== undefined) {
      const keyCoins = Object.keys(coinArray);
      const filters = keyCoins.filter((obj) => obj !== 'USDT');
      return (
        filters.map((coin, num) => <option key={ num } value={ coin }>{ coin }</option>)
      );
    }
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { coinFetch, expenseAction, coinArray, expenseObj } = this.props;
    coinFetch();
    const { value, description, currency, method, tag } = this.state;
    let id = 0;

    if (expenseObj.length > 0) {
      const lastId = expenseObj[expenseObj.length - 1].id;
      id = lastId + 1;
    }

    const objExpense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: coinArray,
    };

    expenseAction(objExpense);

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  totalDespesas() {
    const { expenseObj } = this.props;
    let despesasTotal = 0;
    if (expenseObj.length > 0) {
      expenseObj.map((obj) => {
        const rates = parseFloat(obj.exchangeRates[obj.currency].ask);
        const multi = parseFloat(obj.value) * rates;
        despesasTotal += multi;
        return despesasTotal;
      });
      return despesasTotal;
    }
    return despesasTotal;
  }

  renderSelects() {
    const { currency, method, tag } = this.state;
    return (
      <div>
        <label htmlFor="coin">
          Moeda
          <select
            name="currency"
            value={ currency }
            id="coin"
            onChange={ this.handleChange }
          >
            {this.selectCoins()}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            name="method"
            value={ method }
            id="payment"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            value={ tag }
            id="tag"
            onChange={ this.handleChange }
          >
            <option value="Alimentacao">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>);
  }

  render() {
    const { value, description } = this.state;
    const { emailUser } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            Email:
            {emailUser}
          </div>
          <span data-testid="total-field">
            Despesa Total: R$
            {this.totalDespesas()}
          </span>
          <span data-testid="header-currency-field"> BRL</span>
        </header>
        <form>
          <label htmlFor="number">
            Valor
            <input
              name="value"
              value={ value }
              type="number"
              id="number"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              name="description"
              value={ description }
              type="text"
              id="description"
              onChange={ this.handleChange }
            />
          </label>
          { this.renderSelects() }
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  coinArray: state.wallet.currences,
  expenseObj: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  coinFetch: () => dispatch(fetchCoin()),
  expenseAction: (payload) => dispatch(actionExpenses(payload)),
});

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
  coinFetch: PropTypes.func.isRequired,
  expenseAction: PropTypes.func.isRequired,
  coinArray: PropTypes.arrayOf.isRequired,
  expenseObj: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
