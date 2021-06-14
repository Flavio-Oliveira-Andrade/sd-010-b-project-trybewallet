import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TUNK, DESPESA } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cambio: 'BRL',
      moedas: [],
      id: 0,
      value: '',
      currency: 'USD',
      method: '',
      tag: '',
      description: '',
    };
    this.atualizaMoedas = this.atualizaMoedas.bind(this);
    this.hendlerClik = this.hendlerClik.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.total = this.total.bind(this);
  }

  componentDidMount() {
    const { getAPI } = this.props;
    getAPI().then(() => {
      this.atualizaMoedas();
    });
  }

  atualizaMoedas() {
    const { getMoedas } = this.props;
    this.setState({ moedas: getMoedas });
  }

  handlerChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  fetchAPI() {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => response);
  }

  async hendlerClik() {
    const { getDespesa } = this.props;
    const { id, value, currency, method, tag, description } = this.state;
    this.setState((aux) => ({
      id: aux.id + 1,
    }));
    const exchangeRates = await this.fetchAPI();
    const expense = { id, value, currency, method, tag, description, exchangeRates };
    getDespesa(expense);
    this.total();
  }

  total() {
    const { getTotal } = this.props;
    console.log(getTotal);
    const aux = getTotal.reduce((acc, value) => {
      const auxCurrency = value.currency;
      return acc + (Number(value.value) * value.exchangeRates[auxCurrency].ask);
    }, 0);
    this.setState({ total: aux });
  }

  renderHeader(total, cambio) {
    const { getEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ getEmail }</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">{ cambio }</p>
      </header>
    );
  }

  render() {
    const { total, cambio, moedas } = this.state;
    return (
      <>
        <div>TrybeWallet</div>
        {this.renderHeader(total, cambio)}
        <form>
          <label htmlFor="inputValor">
            Valor:
            <input name="value" id="inputValor" onChange={ this.handlerChange } />
          </label>
          <label htmlFor="inputDescric">
            Descrição:
            <input name="description" id="inputDescric" onChange={ this.handlerChange } />
          </label>
          <label htmlFor="input-moeda">
            Moeda:
            <select name="currency" id="input-moeda" onChange={ this.handlerChange }>
              {moedas.filter((moeda) => moeda !== 'USDT')
                .map((moedae) => (<option key={ moedae }>{ moedae }</option>))}
            </select>
          </label>
          <label htmlFor="input-pagamento">
            Método de Pagamento:
            <select name="method" id="input-pagamento" onChange={ this.handlerChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-debito">
            Tag
            <select name="tag" id="input-debito" onChange={ this.handlerChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
        <button type="button" onClick={ this.hendlerClik }>Adicionar despesa</button>
      </>
    );
  }
}

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getAPI: PropTypes.func.isRequired,
  getMoedas: PropTypes.arrayOf().isRequired,
  getDespesa: PropTypes.func.isRequired,
  getTotal: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getMoedas: state.wallet.currencies[0],
  getTotal: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getAPI: () => dispatch(TUNK),
  getDespesa: (state) => dispatch(DESPESA(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
