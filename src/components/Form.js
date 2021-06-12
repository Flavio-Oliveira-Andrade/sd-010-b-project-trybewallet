import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expenseOnChange } from '../actions/walletAction';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
      id: 0,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };
    this.getValues = this.getValues.bind(this);
    this.getValueStore = this.getValueStore.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
  }

  async componentDidMount() {
    await this.fetchApi();
  }

  getMoedas(moedas) {
    const arrMoedas = Object.keys(moedas);
    const moedinhas = arrMoedas.filter((moeda) => (moeda !== 'USDT'));
    this.setState({ moedas: moedinhas });
  }

  getValues({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  async getValueStore() {
    const { id, value,
      currency,
      method,
      tag,
      description } = this.state;
    const { expenseChange, totalField } = this.props;
    const exchangeRates = await this.fetchApi();

    expenseChange({ id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates });
    this.setState((oldState) => ({
      id: oldState.id + 1,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    }));
    totalField();
  }

  async fetchApi() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const moedas = await response.json();
    this.getMoedas(moedas);
    return moedas;
  }

  selectCategory() {
    return (
      <label htmlFor="categoria">
        Tag
        <select onChange={ this.getValues } name="tag" id="categoria">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  selectMethod() {
    return (
      <label htmlFor="metodo">
        Método de pagamento
        <select onChange={ this.getValues } name="method" id="metodo">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de Crédito</option>
          <option value="Cartão de débito">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  render() {
    const { moedas, expense } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            name="value"
            id="valor"
            onChange={ this.getValues }
            value={ expense }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            name="description"
            id="descricao"
            onChange={ this.getValues }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="currency" id="moeda" onChange={ this.getValues }>
            {moedas.map((moeda) => (
              <option
                name="currency"
                key={ moeda }
                value={ moeda }
              >
                {moeda}
              </option>))}
          </select>
        </label>
        {this.selectMethod()}
        {this.selectCategory()}
        <button
          type="button"
          onClick={ this.getValueStore }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  expenseChange: PropTypes.func,
  totalField: PropTypes.func,
};
Form.defaultProps = {
  expenseChange: () => {},
  totalField: () => {},
};
const mapDispatchToProps = (dispatch) => ({
  expenseChange: (expense) => dispatch(expenseOnChange(expense)),
});

const mapStateToProps = (state) => ({
  return: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
