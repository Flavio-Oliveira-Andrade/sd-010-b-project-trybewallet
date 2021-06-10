import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../images/logo-trybe.png';
import { fetchCurrencie,
  fetchCurrencies,
  actionAddExpenive,
} from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.geraForm = this.geraForm.bind(this);
    this.geraValor = this.geraValor.bind(this);
    this.geraDescricao = this.geraDescricao.bind(this);
    this.geraMoeda = this.geraMoeda.bind(this);
    this.geraPagamento = this.geraPagamento.bind(this);
  }

  componentDidMount() {
    const { fetchMoedasThunk } = this.props;
    fetchMoedasThunk();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  geraValor() {
    const { value } = this.state;
    return (

      <label htmlFor="valorDespesa">
        Valor
        <input
          name="value"
          value={ value }
          id="valorDespesa"
          onChange={ (event) => {
            this.handleChange(event);
          } }
        />
      </label>);
  }

  geraDescricao() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          name="description"
          value={ description }
          id="description"
          onChange={ (event) => {
            this.handleChange(event);
          } }
        />
      </label>);
  }

  geraMoeda() {
    const { currency } = this.state;
    const { currencies } = this.props;
    const moedas = Object.keys(currencies[0]).filter((cur) => cur !== 'USDT');
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ (event) => {
            this.handleChange(event);
          } }
        >
          {moedas.map((curr) => (<option key={ curr } value={ curr }>{curr}</option>))}
        </select>
      </label>);
  }

  geraPagamento() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ (event) => {
            this.handleChange(event);
          } }
        >
          <option name="pagamento" value="Dinheiro">Dinheiro</option>
          <option name="pagamento" value="Cartão de crédito">Cartão de crédito</option>
          <option name="pagamento" value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>);
  }

  geraForm() {
    const { addExpense, expensesList } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="form-input-expense">
        {this.geraValor()}
        {this.geraDescricao()}
        {this.geraMoeda()}
        {this.geraPagamento()}
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
            value={ tag }
            onChange={ (event) => {
              this.handleChange(event);
            } }
          >
            <option name="tag" value="Alimentação">Alimentação</option>
            <option name="tag" value="Lazer">Lazer</option>
            <option name="tag" value="Trabalho">Trabalho</option>
            <option name="tag" value="Transporte">Transporte</option>
            <option name="tag" value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => {
            addExpense({
              id: expensesList.length,
              value,
              currency,
              method,
              tag,
              description,
            });
          } }
        >
          Adicionar despesa
        </button>
      </form>);
  }

  // expensesList.reduce((a, c) => parseInt(a, 10) + parseInt(c.valor, 10), 0);
  render() {
    const { email, isFetching, currencies, expensesList } = this.props;
    let to = 0;
    expensesList.forEach((expense) => {
      to += ((expense.value) * (expense.exchangeRates[expense.currency].ask));
    });
    return (
      <main>
        <header>
          <img
            className="logo-trybe"
            src={ logo }
            alt="Logo Trybe"
          />
          <h3 data-testid="email-field">
            {' '}
            Email:
            { email }
          </h3>
          <h3 data-testid="total-field">
            {' '}
            Total Despesas:
            { to }
          </h3>
          <h3 data-testid="header-currency-field">
            Câmbio Atual BRL
          </h3>
        </header>

        {isFetching === true || currencies[0] === undefined
          ? <h2>Carregando</h2> : this.geraForm()}
        <div className="grid">
          <h3>Descrição</h3>
          <h3>Tag</h3>
          <h3>Valor BRL</h3>
          <h3>Moeda</h3>
          <h3>Pagamento</h3>
        </div>
        {expensesList.map((expense) => (
          <div className="grid" key={ expense.descricao }>
            <span>{expense.description}</span>
            <span>{expense.tag}</span>
            <span>{expense.totalExpense}</span>
            <span>{expense.currency}</span>
            <span>{expense.method}</span>
          </div>
        ))}
      </main>);
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
  expensesList: state.wallet.expenses,
  moedaAtual: state.wallet.moedaAtual,
});
const mapDispatchToProps = (dispatch) => ({
  fetchMoedasThunk: () => dispatch(fetchCurrencies()),
  addExpense: (expense) => dispatch(actionAddExpenive(expense)),
  fetchMoedaAtual: (moeda) => dispatch(fetchCurrencie(moeda)),

});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchMoedasThunk: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.shape().isRequired,
  isFetching: PropTypes.bool.isRequired,
  expensesList: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
