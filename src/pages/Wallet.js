import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../images/logo-trybe.png';
import { fetchCurrencie,
  fetchCurrencies,
  actionAddExpenive,
  actionCalcTotal } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cambioAtual: 0,
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
    },
    () => {
      if (name === 'moeda') {
        const { fetchMoedaAtual } = this.props;
        const { moeda } = this.state;
        fetchMoedaAtual(moeda);
      }
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
      <label htmlFor="metodoPagamento">
        Método de pagamento
        <select
          name="pagamento"
          value={ pagamento }
          onChange={ (event) => {
            this.handleChange(event);
          } }
        >
          <option name="metodoPagamento" value="dinheiro">Dinheiro</option>
          <option name="metodoPagamento" value="credito">Cartão de crédito</option>
          <option name="metodoPagamento" value="debito">Cartão de débito</option>
        </select>
      </label>);
  }

  geraForm() {
    const { addExpense, calcTotal, moedaAtual } = this.props;
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    return (
      <form>
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
            addExpense({ valor, descricao, moeda, pagamento, tag, moedaAtual });
            calcTotal();
          } }
        >
          Adicionar despesa
        </button>
      </form>);
  }

  render() {
    const { email, isFetching, currencies, total, expensesList } = this.props;
    const { cambioAtual } = this.state;
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
            Total Despesas:
            {total}
          </h3>
          <h3 data-testid="header-currency-field">
            {' '}
            Câmbio Atual BRL:
            {cambioAtual}
          </h3>
        </header>

        {isFetching === true || currencies[0] === undefined
          ? <h2>Carregando</h2> : this.geraForm()}
        <div className="grid">
          <h3>Descrição</h3>
          <h3>Valor</h3>
          <h3>Moeda</h3>
          <h3>Moeda R$</h3>
          <h3>Pagamento</h3>
          <h3>Tag</h3>
        </div>
        {expensesList.map((expense) => (
          <div className="grid" key={ expense.descricao }>
            <span>{expense.descricao}</span>
            <span>{expense.valor}</span>
            <span>{expense.moeda}</span>
            <span>{expense.moedaAtual}</span>
            <span>{expense.pagamento}</span>
            <span>{expense.tag}</span>
          </div>
        ))}
      </main>);
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
  total: state.wallet.total,
  expensesList: state.wallet.expenses,
  moedaAtual: state.wallet.moedaAtual,
});
const mapDispatchToProps = (dispatch) => ({
  fetchMoedasThunk: () => dispatch(fetchCurrencies()),
  addExpense: (expense) => dispatch(actionAddExpenive(expense)),
  calcTotal: () => dispatch(actionCalcTotal()),
  fetchMoedaAtual: (moeda) => dispatch(fetchCurrencie(moeda)),

});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  fetchMoedasThunk: PropTypes.func.isRequired,
  fetchMoedaAtual: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  calcTotal: PropTypes.func.isRequired,
  currencies: PropTypes.shape().isRequired,
  moedaAtual: PropTypes.shape().isRequired,
  isFetching: PropTypes.bool.isRequired,
  expensesList: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
