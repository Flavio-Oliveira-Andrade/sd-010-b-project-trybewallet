import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, salvarDespesa } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descrição: '',
      moeda: 'USD',
      metodoDePagamento: 'Dinheiro',
      tag: 'Alimentação',
      despesas: false,

    };
    this.handleChange = this.handleChange.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderValor = this.renderValor.bind(this);
    this.renderDescrição = this.renderDescrição.bind(this);
    this.renderMetodoDePagamento = this.renderMetodoDePagamento.bind(this);
    this.renderMoeda = this.renderMoeda.bind(this);
    this.renderCategoria = this.renderCategoria.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderBotaoAdicionarDespesa = this.renderBotaoAdicionarDespesa.bind(this);
    this.adicionarDespesa = this.adicionarDespesa.bind(this);
  }

  componentDidMount() {
    const { moedasApi } = this.props;
    moedasApi();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  adicionarDespesa(despesa) {
    const { enviarDespesa, moedasApi } = this.props;
    moedasApi();
    const { dados } = this.props;
    const informacoesDespesa = { ...despesa, exchangeRates: dados };
    enviarDespesa(informacoesDespesa);
    this.setState((prev) => ({ ...prev, despesas: true }));
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Boas vindas
          {' '}
          {email}
          {' '}
        </p>
        {' '}
        <br />
        {' '}
        <div data-testid="total-field">
          Despesa Total:
          { 0 }
          {' '}
        </div>
        <span data-testid="header-currency-field">BRL</span>
      </header>);
  }

  renderValor() {
    return (
      <label htmlFor="valor">
        {' '}
        Valor
        <input type="text" name="valor" id="valor" onChange={ this.handleChange } />
      </label>
    );
  }

  renderDescrição() {
    return (
      <label htmlFor="descrição">
        {' '}
        Descrição
        <input
          type="text"
          name="descrição"
          id="descrição"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderMoeda() {
    const { moedas } = this.props;
    const usdtIndex = moedas.findIndex((el) => el === 'USDT');
    moedas.splice(usdtIndex, 1);
    return (
      <label htmlFor="moeda">
        {' '}
        Moeda
        <select
          name="moeda"
          id="moeda"
          onChange={ this.handleChange }
        >
          {moedas.map((moeda, index) => (
            <option key={ index } value={ moeda }>{moeda}</option>
          ))}
        </select>
      </label>
    );
  }

  renderMetodoDePagamento() {
    return (
      <label htmlFor="metodoDePagamento">
        {' '}
        Método de Pagamento
        <select
          name="metodoDePagamento"
          id="metodoDePagamento"
          onChange={ this.handleChange }
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de Crédito</option>
          <option value="debito">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  renderCategoria() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          onChange={ this.handleChange }
        >
          <option value="alimentação">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderBotaoAdicionarDespesa() {
    const { todasDespesasSalvas } = this.props;
    const { valor, descrição, moeda, metodoDePagamento, tag } = this.state;
    let id = 0;
    if (todasDespesasSalvas.length !== 0) {
      const tamanhoTodasDespesasSalvas = todasDespesasSalvas.length;
      const ultimaId = todasDespesasSalvas[tamanhoTodasDespesasSalvas - 1].id;
      id = ultimaId + 1;
    }
    const despesa = { id, valor, descrição, moeda, metodoDePagamento, tag };
    return (
      <span>
        {' '}
        <button
          type="button"
          onClick={ () => this.adicionarDespesa(despesa) }
        >
          Adionar Despesa

        </button>
      </span>
    );
  }

  renderForm() {
    return (
      <form>
        {this.renderValor()}
        {this.renderDescrição()}
        {this.renderMoeda()}
        {this.renderMetodoDePagamento()}
        {this.renderCategoria()}
        {this.renderBotaoAdicionarDespesa()}
      </form>
    );
  }

  render() {
    const { moedas, isFetching } = this.props;
    return (
      <div>
        TrybeWallet
        {this.renderHeader()}
        { (moedas === undefined || isFetching)
          ? <h1> Carregando... </h1> : this.renderForm() }
        <br />
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  moedas: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
  todasDespesasSalvas: state.wallet.expenses,
  dados: state.wallet.dados,

});

const mapDispatchToProps = (dispatch) => ({
  moedasApi: () => dispatch(fetchApi()),
  enviarDespesa: (despesa) => dispatch(salvarDespesa(despesa)),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
