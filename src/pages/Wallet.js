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
      valor: 0,
      descricao: '',
      moeda: '',
      pagamento: '',
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
    const { valor } = this.state;
    return (

      <label htmlFor="valorDespesa">
        Valor
        <input
          name="valor"
          value={ valor }
          id="valorDespesa"
          onChange={ (event) => {
            this.handleChange(event);
          } }
        />
      </label>);
  }

  geraDescricao() {
    const { descricao } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          name="descricao"
          value={ descricao }
          id="descricao"
          onChange={ (event) => {
            this.handleChange(event);
          } }
        />
      </label>);
  }

  geraMoeda() {
    const { moeda } = this.state;
    const { currencies } = this.props;
    const moedas = Object.keys(currencies[0]).filter((currency) => currency !== 'USDT');
    return (
      <label htmlFor="moeda">
        Moeda
        <select
          name="moeda"
          id="moeda"
          value={ moeda }
          onChange={ (event) => {
            this.handleChange(event);
          } }
        >
          {moedas.map((curr) => (<option key={ curr } value={ curr }>{curr}</option>))}
        </select>
      </label>);
  }

  geraPagamento() {
    const { pagamento } = this.state;
    return (
      <label htmlFor="pagamento">
        Método de pagamento:
        <select
          name="pagamento"
          id="pagamento"
          value={ pagamento }
          onChange={ (event) => {
            this.handleChange(event);
          } }
        >
          <option name="pagamento" value="dinheiro">Dinheiro</option>
          <option name="pagamento" value="credito">Cartão de crédito</option>
          <option name="pagamento" value="debito">Cartão de débito</option>
        </select>
      </label>);
  }

  geraForm() {
    const { addExpense, moedaAtual, expensesList } = this.props;
    const { valor, descricao, moeda, pagamento, tag } = this.state;
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
            <option name="tag" value="alimentacao">Alimentação</option>
            <option name="tag" value="lazer">Lazer</option>
            <option name="tag" value="trabalho">Trabalho</option>
            <option name="tag" value="transporte">Transporte</option>
            <option name="tag" value="saude">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => {
            const totalExpense = valor * moedaAtual;
            addExpense({
              id: expensesList.length,
              valor,
              descricao,
              moeda,
              pagamento,
              tag,
              moedaAtual,
              totalExpense });
          } }
        >
          Adicionar despesa
        </button>
      </form>);
  }

  render() {
    const { email, isFetching, currencies, expensesList } = this.props;
    const to = expensesList.reduce((a, c) => parseInt(a, 10) + parseInt(c.valor, 10), 0);
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
            <span>{expense.descricao}</span>
            <span>{expense.tag}</span>
            <span>{expense.totalExpense}</span>
            <span>{expense.moeda}</span>
            <span>{expense.pagamento}</span>
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
  moedaAtual: PropTypes.shape().isRequired,
  isFetching: PropTypes.bool.isRequired,
  expensesList: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
