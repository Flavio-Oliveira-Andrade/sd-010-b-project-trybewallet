import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDespesa } from '../actions';

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
      despesa: {
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
    this.consultarApi();
  }

  updateId() {
    const { despesaId } = this.state;
    this.setState((prev) => ({ despesaId: prev.despesaId + 1 }));
    console.log(despesaId);
  }

  adicionarDespesa() {
    const selectTag = document.querySelector('#tag');
    const selectPgto = document.querySelector('#pgto');
    const { despesaId, exchangeRates } = this.state;
    const { addDespesas } = this.props;
    this.setState((prev) => ({ despesaId: prev.despesaId + 1 }));
    console.log(despesaId);
    addDespesas({ despesa: {
      id: despesaId,
      tag: selectTag.value,
      method: selectPgto.value,
    },
    exchangeRates });
    this.consultarApi();
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
    const { despesa } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          id="descricao"
          data-testid="description-input"
          onChange={ (e) => this.setState({
            despesa: { ...despesa, description: e.target.value },
          }) }
        />
      </label>);
  }

  retornaValores() {
    const { retornoConsulta, despesa } = this.state;
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
          value={ despesa.currency }
          onChange={ (e) => this.setState({
            despesa: { ...despesa, currency: e.target.value },
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
    const { carregando, despesa } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            data-testid="value-input"
            id="valor"
            onChange={ (e) => this.setState({
              despesa: { ...despesa, value: e.target.value },
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
});

Despesa.propTypes = {
  addDespesas: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Despesa);
