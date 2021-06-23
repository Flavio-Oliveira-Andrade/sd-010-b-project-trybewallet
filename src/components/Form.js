import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { nomeDaAction } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    // this.fetchAPI();
  }

  async fetchAPI() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json());
      // Dica de Fernanda Porto:
    delete response.USDT;
    return response;
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    const api = await this.fetchAPI();
    this.setState({ exchangeRates: api }, () => {
      const { addDespesa } = this.props;
      addDespesa(this.state);
      this.setState((prevState) => ({ id: prevState.id + 1 }));
    });
  }

  funcaoValor() {
    return (
      <label htmlFor="value">
        Valor
        <input
          type="text"
          id="value"
          data-testid="value-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  funcaoDescricao() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          data-testid="description-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  funcaoMoeda() {
    const { getCurrency } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          data-testid="currency-input"
          onChange={ this.handleChange }
        >
          {
            getCurrency.map((string, index) => (
              <option
                name="currency"
                key={ index }
              >
                {string}
              </option>
            ))
          }
        </select>
      </label>
    );
  }

  funcaoMetodo() {
    const metodo = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          data-testid="method-input"
          onChange={ this.handleChange }
        >
          {
            metodo.map((string, index) => (
              <option
                name="method"
                key={ index }
              >
                {string}
              </option>
            ))
          }
        </select>
      </label>
    );
  }

  funcaoTag() {
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          {
            tag.map((string, index) => (
              <option
                name="tag"
                key={ index }
              >
                {string}
              </option>
            ))
          }
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.funcaoValor() }
        { this.funcaoDescricao() }
        { this.funcaoMoeda() }
        { this.funcaoMetodo() }
        { this.funcaoTag() }
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  getCurrency: state.wallet.currencies,
});

const mapDispathToProps = (dispatch) => ({
  addDespesa: (despesas) => dispatch(nomeDaAction(despesas)),
});

Form.propTypes = {
  addDespesa: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(Form);
