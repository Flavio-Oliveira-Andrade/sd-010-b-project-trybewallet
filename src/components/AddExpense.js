import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWalletSpend } from '../actions';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayObjCoin: [],
      spent: 0,
      coin: '',
      paymentMethod: '',
      tag: '',
      description: '',
    };

    this.coin = this.coin.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.buttonAddSpend = this.buttonAddSpend.bind(this);
  }

  componentDidMount() {
    this.getCoin();
  }

  async getCoin() {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const objCoins = await data.json();
    delete objCoins.USDT; // Aprendi a utilizar o delete como o Eduardo Santos

    const arrayObjCoin = Object.values(objCoins);
    this.setState({ arrayObjCoin });
  }

  handleClick({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  // ----------------- components ---------------------
  spend(handleClick, valueState) {
    return (
      <label htmlFor="spent">
        Valor:
        <input type="number" id="spent" value={ valueState } onChange={ handleClick } />
      </label>
    );
  }

  coin(handleClick, valueState, arrayObjCoin) {
    return (
      <label htmlFor="coin">
        Moeda:
        <select type="text" id="coin" onChange={ handleClick } value={ valueState }>
          <option value="" disabled hidden>{' '}</option>
          {arrayObjCoin.map(({ code }, i) => (
            <option key={ i } value={ code }>{code}</option>
          ))}
        </select>
      </label>
    );
  }

  paymentMethod(handleClick, valueState) {
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select
          type="text"
          id="paymentMethod"
          onChange={ handleClick }
          value={ valueState }
        >
          <option value="" disabled hidden>{' '}</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  tag(handleClick, valueState) {
    return (
      <label htmlFor="tag">
        Tag:
        <select type="text" id="tag" onChange={ handleClick } value={ valueState }>
          <option value="" disabled hidden>{' '}</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  description(handleClick, valueState) {
    return (
      <label htmlFor="description">
        Descrição:
        <input type="" id="description" onChange={ handleClick } value={ valueState } />
      </label>
    );
  }

  buttonAddSpend() {
    const { coin, spent, paymentMethod, tag, description } = this.state;
    const { addSpend, qtdSpended } = this.props;

    return (
      <button
        type="button"
        onClick={ () => {
          if (
            coin !== ''
            && spent > 0
            && paymentMethod !== ''
            && tag !== ''
            && description !== ''
          ) {
            addSpend({
              id: qtdSpended,
              value: spent,
              method: paymentMethod,
              currency: coin,
              description,
              tag,
            });

            this.setState({
              coin: '', spent: 0, paymentMethod: '', tag: '', description: '',
            });
          } else {
            console.log('preencha todos os campos');
          }
        } }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { arrayObjCoin, coin, spent, paymentMethod, tag, description } = this.state;
    return (
      <menu className="add-spend">
        <form>
          {this.spend(this.handleClick, spent)}
          {this.coin(this.handleClick, coin, arrayObjCoin)}
          {this.paymentMethod(this.handleClick, paymentMethod)}
          {this.tag(this.handleClick, tag)}
          {this.description(this.handleClick, description)}

          {this.buttonAddSpend()}
        </form>
      </menu>
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
