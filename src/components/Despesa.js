import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDespesa, fetchAPI } from '../actions';

const pgto = () => (
  <select
    data-testid="method-input"
    id="pgto"
  >
    <option key="dinheiro" value="Dinheiro">Dinheiro</option>
    <option key="Cartão de crédito" value="Cartão de crédito"> Cartão de crédito </option>
    <option value="Cartão de débito" key="Cartão de débito">Cartão de débito</option>
  </select>
);

const tag = () => (
  <select
    data-testid="tag-input"
    id="tag"
  >
    <option value="Alimentação">Alimentação</option>
    <option value="Lazer">Lazer</option>
    <option value="Trabalho">Trabalho</option>
    <option value="Transporte">Transporte</option>
    <option value="Saúde">Saúde</option>
  </select>
);

class Despesa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      retornoConsulta: [],
      carregando: true,
      despesaId: 0,
      expenses: {
        id: 0,
        value: 0,
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        description: '',
      },
      exchangeRates: [],
    };

    this.consultarApi = this.consultarApi.bind(this);
    this.inputDescricao = this.inputDescricao.bind(this);
    this.retornaValores = this.retornaValores.bind(this);
    this.adicionarDespesa = this.adicionarDespesa.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
    this.consultarApi();
  }

  adicionarDespesa() {
    this.consultarApi();
    const selectTag = document.querySelector('#tag');
    const selectPgto = document.querySelector('#pgto');
    const { despesaId, exchangeRates, expenses } = this.state;
    const { addDespesas, getCurrency } = this.props;
    this.setState((prev) => ({ despesaId: prev.despesaId + 1 }));
    console.log(despesaId);
    addDespesas({ expenses: {
      id: despesaId,
      currency: expenses.currency,
      description: expenses.description,
      tag: selectTag.value,
      method: selectPgto.value,
    },
    exchangeRates });
    getCurrency();
  }

  consultarApi() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then((json) => {
          const { USDT, ...curr } = json;
          this.setState({
            exchangeRates: curr,
            retornoConsulta: Object.keys(curr),
            carregando: false });
        }));
  }

  inputDescricao() {
    const { expenses } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          id="descricao"
          data-testid="description-input"
          onChange={ (e) => this.setState({
            expenses: { ...expenses, description: e.target.value },
          }) }
        />
      </label>);
  }

  retornaValores() {
    const { retornoConsulta, expenses } = this.state;
    const currency = Object.values(retornoConsulta).filter((result) => result);
    return (
      <label
        htmlFor="moeda"
        className="moeda"
      >
        Moeda
        <select
          data-testid="currency-input"
          id="moeda"
          value={ expenses.currency }
          onChange={ (e) => this.setState({
            expenses: { ...expenses, currency: e.target.value },
          }) }
        >
          { currency.map((result, index) => (
            <option key={ index } value={ result } data-testid={ result }>
              {result}
            </option>))}
        </select>
      </label>
    );
  }

  render() {
    const { carregando, expenses } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            data-testid="value-input"
            id="valor"
            onChange={ (e) => this.setState({
              expenses: { ...expenses, value: e.target.value },
            }) }
          />
        </label>
        {this.inputDescricao()}
        {!carregando
          ? this.retornaValores() : null}
        <label
          htmlFor="pgto"
        >
          Método de pagamento
          {pgto()}
        </label>
        <label
          htmlFor="tag"
        >
          Tag
          {tag()}
        </label>
        <button
          type="button"
          className="button"
          onClick={ this.adicionarDespesa }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDespesas: (state) => dispatch(addDespesa(state)),
  getCurrency: () => dispatch(fetchAPI()),
});

Despesa.propTypes = {
  addDespesas: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Despesa);
