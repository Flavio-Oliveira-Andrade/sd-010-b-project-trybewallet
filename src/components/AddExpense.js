import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWalletSpend } from '../actions';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      spent: 0,
      coin: 'USD',
      paymentMethod: '',
      tag: '',
      description: '',
    };

    this.coin = this.coin.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSpendAdded = this.handleSpendAdded.bind(this);
  }

  componentDidMount() {
    this.fetchCoin();
  }

  async fetchCoin() {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const objCoins = await data.json();
    delete objCoins.USDT;

    const coins = Object.values(objCoins);
    this.setState({ coins });
  }

  handleClick({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  spend(handleClick, state) {
    return (
      <label htmlFor="spent">
        Valor:
        <input type="number" id="spent" value={ state } onChange={ handleClick } />
      </label>
    );
  }

  coin(handleClick, state, coins) {
    return (
      <label htmlFor="coin">
        moeda:
        <select type="text" id="coin" onChange={ handleClick } value={ state }>
          {coins.map(({ code }, i) => (
            <option key={ i } value={ code }>{code}</option>
          ))}
        </select>
      </label>
    );
  }

  paymentMethod(handleClick, state) {
    return (
      <label htmlFor="paymentMethod">
        Método de Pagamento:
        <select
          type="text"
          id="paymentMethod"
          onChange={ handleClick }
          value={ state }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tag(handleClick, state) {
    return (
      <label htmlFor="tag">
        Tag:
        <select type="text" id="tag" onChange={ handleClick } value={ state }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  description(handleClick, state) {
    return (
      <label htmlFor="description">
        Descrição:
        <input type="" id="description" onChange={ handleClick } value={ state } />
      </label>
    );
  }

  handleSpendAdded() {
    const { coin, spent, paymentMethod, tag, description } = this.state;
    const { addSpend, qtdSpended } = this.props;

    return (
      <button
        type="button"
          onClick={ () =>
            addSpend({
            id: qtdSpended,
            value: spent,
            method: paymentMethod,
            currency: coin,
            description,
            tag,
          }) }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { coins, coin, spent, paymentMethod, tag, description } = this.state;
    return (
      <form>
        {this.spend(this.handleClick, spent)}
        {this.coin(this.handleClick, coin, coins)}
        {this.paymentMethod(this.handleClick, paymentMethod)}
        {this.tag(this.handleClick, tag)}
        {this.description(this.handleClick, description)}
        {this.handleSpendAdded()}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSpend: (spend) => dispatch(fetchWalletSpend(spend)),
});

const mapStateToProps = (state) => ({
  qtdSpended: state.wallet.expenses.length,
});

AddExpense.propTypes = {
  addSpend: PropTypes.func.isRequired,
  qtdSpended: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
