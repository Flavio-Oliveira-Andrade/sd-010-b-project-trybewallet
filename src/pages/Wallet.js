import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, salvarDespesa, apagarDespesa } from '../actions';
import RenderDespesas from './RenderDespesas';
import RenderHeader from './RenderHeader';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',

    };
    this.handleChange = this.handleChange.bind(this);
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
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  adicionarDespesa() {
    const { todasDespesasSalvas } = this.props;
    const { value, description, currency, method, tag } = this.state;
    let id = 0;
    if (todasDespesasSalvas.length !== 0) {
      const tamanhoTodasDespesasSalvas = todasDespesasSalvas.length;
      const ultimaId = todasDespesasSalvas[tamanhoTodasDespesasSalvas - 1].id;
      id = ultimaId + 1;
    }
    const despesa = { id, value, description, currency, method, tag };
    const { enviarDespesa } = this.props;
    enviarDespesa(despesa);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação' });
  }

  renderValor() {
    return (
      <label htmlFor="value">
        {' '}
        Valor
        <input type="text" name="value" id="value" onChange={ this.handleChange } />
      </label>
    );
  }

  renderDescrição() {
    return (
      <label htmlFor="description">
        {' '}
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderMoeda() {
    const { moedas } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        {' '}
        Moeda
        <select
          name="currency"
          id="currency"
          onChange={ this.handleChange }
          value={ currency }
        >
          {moedas.map((moeda, index) => (
            <option key={ index } value={ moeda }>{moeda}</option>
          ))}
        </select>
      </label>
    );
  }

  renderMetodoDePagamento() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        {' '}
        Método de Pagamento
        <select
          name="method"
          id="method"
          onChange={ this.handleChange }
          value={ method }
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de Crédito</option>
          <option value="Cartão de débito">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  renderCategoria() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          onChange={ this.handleChange }
          value={ tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderBotaoAdicionarDespesa() {
    return (
      <span>
        {' '}
        <button
          type="button"
          onClick={ () => this.adicionarDespesa() }
        >
          Adicionar Despesa
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

  renderDespesas() {
    const { todasDespesasSalvas } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de Pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor Convertido</th>
            <th>Moeda de Conversão</th>
          </tr>
        </thead>
        <tbody>
          {todasDespesasSalvas.map((des) => (
            <tr key={ des.id }>
              <td>{des.description}</td>
              <td>{des.tag}</td>
              <td>{des.method}</td>
              <td>{des.value}</td>
              <td>{des.currency}</td>
              <td>{des.exchangeRates[des.currency].ask}</td>
              <td>
                {(
                  parseFloat(des.value)
                  * parseFloat(des.exchangeRates[des.currency].ask))}
              </td>
              <td>Real Brasileiro</td>
            </tr>))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        TrybeWallet
        <RenderHeader />
        { this.renderForm() }
        <RenderDespesas />
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
  apagarDespesa: (despesa) => dispatch(apagarDespesa(despesa)),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
