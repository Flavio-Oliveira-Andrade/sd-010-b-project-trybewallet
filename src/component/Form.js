import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWallet, walletExpenses } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDispatch = this.handleDispatch.bind(this);
  }

  componentDidMount() {
    const { coinAPI } = this.props;
    coinAPI();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleDispatch() {
    const { dispatchExpenses } = this.props;
    dispatchExpenses(this.state);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  handleClick() {
    // exchangeRates(this.state);
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((requisicao) => requisicao.json())
      .then((requisicao) => this.setState({
        exchangeRates: requisicao },
      this.handleDispatch));
  }
  // esse fetch dentro do handleClick fiz com ajuda do @Zambs e ele pediu para não usar no projeto. vou refazer;

  render() {
    const { exchange } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency" onChange={ this.handleChange }>
            { exchange.map((currencies) => (
              <option value={ currencies } key={ currencies }>
                { currencies }
              </option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento
          <select id="method" name="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  exchange: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  coinAPI: () => dispatch(fetchWallet()),
  dispatchExpenses: (expenses) => dispatch(walletExpenses(expenses)),
  // exchangeRates: (expenses) => dispatch(exchangeRateAPI(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  coinAPI: PropTypes.func.isRequired,
  exchange: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
