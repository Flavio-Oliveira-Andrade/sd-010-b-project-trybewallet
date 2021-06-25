import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newFetchAwesomeApi } from '../actions/walletActions';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      currency: '',
      method: '',
      tag: '',
      description: '',
    };

    this.getDataUser = this.getDataUser.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getDataUser(e) {
    const { target } = e;
    this.setState((old) => ({
      ...old,
      [target.name]: target.value,
    }));
  }

  handleClick() {
    const { newExpense, expenses } = this.props;
    const { id, value, currency, method, tag, description } = this.state;
    const expensesLength = expenses.length;
    const state2 = {
      id,
      value,
      currency,
      method,
      tag,
      description,
    };
    newExpense(state2);

    if (expensesLength >= 0) {
      this.setState({ id: expensesLength + 1 });
    }
  }

  totalExpenses() {
    let total = 0;
    const { expenses } = this.props;

    expenses.forEach(({ value, currency, exchangeRates }) => {
      total += exchangeRates[currency].ask * value;
    });

    return total;
  }

  inputText(label) {
    return (
      <label htmlFor={ label === 'Valor' ? 'value' : 'description' }>
        {label}
        <input
          type="text"
          name={ label === 'Valor' ? 'value' : 'description' }
          id={ label === 'Valor' ? 'value' : 'description' }
          onChange={ (e) => this.getDataUser(e) }
        />
      </label>
    );
  }

  inputCurrency() {
    const { moedas } = this.props;
    return (
      <label className="labels-form" htmlFor="currencie">
        Moeda
        <select
          className="inputs-form"
          id="currencie"
          name="currency"
          onChange={ (e) => this.getDataUser(e) }
        >
          { moedas.map((currencie) => (
            <option
              value={ currencie }
              key={ currencie }
            >
              { currencie }
            </option>
          ))}
        </select>
      </label>
    );
  }

  inputTag() {
    return (
      <label className="labels-form" htmlFor="tag">
        Tag
        <select
          className="inputs-form"
          id="tag"
          name="tag"
          onChange={ (e) => this.getDataUser(e) }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  inputMethod() {
    return (
      <label className="labels-form" htmlFor="payment">
        Método de pagamento
        <select
          className="inputs-form"
          id="payment"
          name="method"
          onChange={ (e) => this.getDataUser(e) }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  render() {
    const { user } = this.props;
    return (
      <header>
        <section>
          <h1>TRYBEWALLET</h1>
          <h2 data-testid="email-field">{ user || 'name'}</h2>
          <h2 data-testid="total-field">{ this.totalExpenses() }</h2>
          <h2 data-testid="header-currency-field">BRL</h2>
        </section>
        <section>
          <form>
            {this.inputText('Valor')}
            {this.inputText('Descrição')}
            { this.inputCurrency() }
            { this.inputMethod() }
            {this.inputTag() }
            <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
          </form>
        </section>

      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user.email,
  moedas: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  newExpense: (expense) => dispatch(newFetchAwesomeApi(expense)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
