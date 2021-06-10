import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWallet } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.saveCoin = this.saveCoin.bind(this);
    this.saveData = this.saveData.bind(this);
    this.sa = this.sa.bind(this);

    this.state = {
      moeda: {},
      id: -1,
      soma: 0,
    };
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => this.saveCoin(json));
  }

  saveCoin(obj) {
    this.setState({
      moeda: obj,
    });
  }

  saveData({ target }) {
    const value = typeof (target.value) === 'string' ? target.value : target.selected;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  sa(fun) {
    const { value, description, currency, method, tag, id, soma, moeda } = this.state;
    const newId = id + 1;
    const exchange = moeda[currency].ask;
    const newSoma = soma + parseFloat(value) * parseFloat(exchange);
    this.setState({
      id: newId,
      soma: newSoma,
    });
    // console.log({ id: newId, value, description, currency, method, tag });
    return fun({ id: newId, value, description, currency, method, tag });
  }

  render() {
    const { email, fetch } = this.props;
    const { moeda, soma } = this.state;
    return (
      <div>
        <header>
          <h1 data-testid="email-field">{ email }</h1>
          <h2 data-testid="total-field">{ soma }</h2>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input onChange={ this.saveData } id="valor" name="value" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input onChange={ this.saveData } id="descricao" name="description" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select onChange={ this.saveData } id="moeda" name="currency">
              {
                Object.keys(moeda).map((element) => element !== 'USDT'
                && <option key={ element }>{element}</option>)
              }
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select onChange={ this.saveData } id="pagamento" name="method">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select onChange={ this.saveData } id="tag" name="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
        <button type="button" onClick={ () => this.sa(fetch) }>Adicionar despesa</button>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: (expenses) => dispatch(fetchWallet(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
};
