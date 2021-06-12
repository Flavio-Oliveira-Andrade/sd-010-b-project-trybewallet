import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, fetchExpenses } from '../actions';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      value: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentação',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.inputCurrency = this.inputCurrency.bind(this);
  }

  componentDidMount() {
    const { fetchMoedas } = this.props;
    fetchMoedas();
  }

  handleClick() {
    const { fetchMoedas, expense, currencies } = this.props;
    delete currencies.USDT;
    fetchMoedas();
    this.setState({ exchangeRates: currencies }, () => expense(this.state));
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  // Fazer o input de Moeda aqui para diminuir tamanho do render
  inputCurrency() {
    const { currencies } = this.props;
    const arrayCurrencies = Object.keys(currencies);
    return (
      arrayCurrencies.map((currencie) => ((currencie !== 'USDT')
        ? <option>{currencie}</option>
        : null))
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="value" id="valor" onChange={ this.handleChange } />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            name="description"
            id="descricao"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="currency" onChange={ this.handleChange }>
            { this.inputCurrency }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="method" id="pagamento" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="tag" id="categoria" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>
          Adicionar Despesas
        </button>

      </form>
    );
  }
}

ExpenseForm.propTypes = {
  fetchMoedas: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf.isRequired,
  expense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: () => dispatch(fetchApi()),
  expense: (e) => dispatch(fetchExpenses(e)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
