import React from 'react';
import { connect } from 'react-redux';
import { addExpense, fetchApi } from '../actions/index'

class Wallet extends React.Component {
  constructor () {
    super();

    this.state = {
      total: 0,
      loadedPage: false,
      expense: {
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
      }
    };
  };

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  // Gerar options do select de moedas via props
  generateCurrencySelect = () => {
    const { currencies } = this.props;
    const arrays = Object.keys(currencies)
      
    return arrays.map((currency) => 
      <option key={ currency } value={ currency }>{ currency }</option>
    );
  };

  // Modifica o valor do input total via state
  changeTotalValue = ({ value }) => {
    this.setState({ total: value });
  }

  // Coloca os dados da despesa no estado
  handleChangeExpense = ({ id, value }) => {
    this.setState((oldState) => ({expense: {...oldState.expense, [id]: value} } ));
  }

  // Carrega o valor total das despesas
  loadTotalWalletExpenses() {
    const { expenses } = this.props;
    let total = 0;

      expenses.forEach((expense) => {
        total += Number(expense.value) * Number(expense.exchangeRates[expense.currency].ask);
      });

    return total;
  }

  render() {
    const { expense } = this.state;
    const { email, addExpense, loadedPage } = this.props;

    if (loadedPage) {
      return (
        <>
          <header>
            <span data-testid="email-field">{`Email: ${ email } `}</span>
            <span data-testid="total-field">{ `Total: ${this.loadTotalWalletExpenses()} `}</span>
            <span data-testid="header-currency-field">BRL</span>
          </header>
  
          <main>
          <form>
          <label>
              Valor:
              <input id="value" type="text" onChange={ ({ target }) => this.handleChangeExpense(target) } />
            </label>
            <label>
              Descrição:
              <input id="description" type="text" onChange={ ({ target }) => this.handleChangeExpense(target) } />
            </label>
            <label>
              Moeda:
              <select id="currency" onChange={ ({ target }) => this.handleChangeExpense(target) }>
                { this.generateCurrencySelect() }
              </select>
            </label>
            <label>
              Método de Pagamento:
              <select id="method" onChange={ ({ target }) => this.handleChangeExpense(target) }>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cartão de crédito">Cartão de crédito</option>
                <option value="Cartão de débito">Cartão de débito</option>
              </select>
            </label>
            <label>
              Tag:
              <select id="tag" onChange={ ({ target }) => this.handleChangeExpense(target) }>
                <option value="Alimentação">Alimentação</option>
                <option value="Lazer">Lazer</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Transporte">Transporte</option>
                <option value="Saúde">Saúde</option>
              </select>
            </label>
          </form>
          </main>
  
          <footer>
            <button type="button" onClick={ () => addExpense(expense) }>Adicionar Despesa</button>
          </footer>
        </>
      );
  
    } else {
      return <h1>Carregando...</h1>
    }
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  loadedPage: state.wallet.loadedPage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchApi()),
  addExpense: (expense) => dispatch(addExpense(expense)),
});

// Wallet.propTypes = {
//   email: PropTypes.string,
//   total: PropTypes.number,
// }.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
