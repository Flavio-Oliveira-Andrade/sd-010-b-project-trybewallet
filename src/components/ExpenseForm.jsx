import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi, userExpenses } from '../actions';
import '../App.css';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: 1,
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentacao',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.insertHeader = this.insertHeader.bind(this);
    this.inputValue = this.inputValue.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
    this.selectCurrency = this.selectCurrency.bind(this);
    this.selectPayMethod = this.selectPayMethod.bind(this);
    this.selectTag = this.selectTag.bind(this);
    this.getAllExpenses = this.getAllExpenses.bind(this);
  }

  componentDidMount() {
    const { getApiToCurrencies } = this.props;
    getApiToCurrencies();
  }

  getAllExpenses() {
    const { getExpenses } = this.props;
    return (
      getExpenses.map((elem) => (
        <div
          key={ elem.id }
        >
          <span>
            {
              `${elem.value}
              
              ${elem.description}
              
              ${elem.currency}
              
              ${elem.method}
              
              ${elem.tag}`
            }
          </span>
        </div>
      ))
    );
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { addExpenses, getApiToCurrencies, getCurrencies } = this.props;
    getApiToCurrencies();
    const { id } = this.state;
    this.setState({
      exchangeRates: getCurrencies,
    }, () => addExpenses(this.state));
    this.setState({
      id: id + 1,
    });
    this.getAllExpenses();
  }

  insertHeader() {
    const { email, getExpenses } = this.props;
    return (
      <section className="section-header">
        <div className="user-email"><h2 data-testid="email-field">{ email }</h2></div>
        <div className="user-total">
          <span data-testid="total-field">
            { getExpenses.reduce((acc, elem) => acc + (
              elem.exchangeRates[elem.currency].ask * elem.value), 0).toFixed(2) }
          </span>
          <span> </span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </section>
    );
  }

  inputValue() {
    return (
      <label htmlFor="value">
        Valor
        <input
          onChange={ this.handleChange }
          className="input-exp"
          name="value"
          id="value"
          type="text"
        />
      </label>
    );
  }

  inputDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          onChange={ this.handleChange }
          className="input-exp"
          name="description"
          id="description"
          type="text"
        />
      </label>
    );
  }

  selectCurrency() {
    const { getCurrencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          onChange={ this.handleChange }
          className="input-exp"
          name="currency"
          id="currency"
        >
          { Object.keys(getCurrencies).filter((elem) => elem !== 'USDT')
            .map((elem) => (<option key={ elem } value={ elem }>{ elem }</option>)) }
        </select>
      </label>
    );
  }

  selectPayMethod() {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          onChange={ this.handleChange }
          className="input-exp"
          name="method"
          id="method"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  selectTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select onChange={ this.handleChange } className="input-exp" name="tag" id="tag">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <>
        <header className="general-header">
          { this.insertHeader() }
        </header>
        <section className="section-form-expensives">
          <form>
            { this.inputValue() }
            { this.inputDescription() }
            { this.selectCurrency() }
            { this.selectPayMethod() }
            { this.selectTag() }
            <button
              onClick={ this.handleClick }
              className="btn-add"
              type="button"
            >
              Adicionar despesa
            </button>
          </form>
        </section>
        { this.getAllExpenses() }
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getApiToCurrencies: () => dispatch(fetchApi()),
  addExpenses: (state) => dispatch(userExpenses(state)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  getExpenses: state.wallet.expenses,
  getCurrencies: state.wallet.currencies,
});

ExpenseForm.propTypes = {
  email: PropTypes.string.isRequired,
  getExpenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  getApiToCurrencies: PropTypes.func.isRequired,
  addExpenses: PropTypes.func.isRequired,
  getCurrencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
