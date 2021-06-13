import React from 'react';

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
  <select data-testid="tag-input" id="tag">
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
    };

    this.consultarApi = this.consultarApi.bind(this);
    this.inputDescricao = this.inputDescricao.bind(this);
    this.retornaValores = this.retornaValores.bind(this);
  }

  componentDidMount() {
    this.consultarApi();
  }

  consultarApi() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then((json) => {
          const { USDT, ...curr } = json;
          this.setState({ retornoConsulta: Object.keys(curr), carregando: false });
        }));
  }

  inputDescricao() {
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          id="descricao"
          data-testid="description-input"
        />
      </label>);
  }

  retornaValores() {
    const { retornoConsulta } = this.state;
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
          value=""
          onChange={ () => {} }
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
    const { carregando } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            data-testid="value-input"
            id="valor"
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
      </form>
    );
  }
}

export default Despesa;
