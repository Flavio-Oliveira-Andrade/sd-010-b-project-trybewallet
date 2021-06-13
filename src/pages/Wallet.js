import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchApi, getExpenses } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      exchangeRates: [],
      currency: [],

      all: [],
      id: 0,
    };
    this.category = this.category.bind(this);
    this.updateState = this.updateState.bind(this);
    this.header = this.header.bind(this);
    this.form = this.form.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  async componentDidMount() {
    const { fetchApi } = this.props;
    await fetchApi().then(() => {
      const { currencies } = this.props;
      return this.updateState(Object.keys(currencies), currencies);
    });
  }

  async onClick() {
    const { sendExpenses, fetchApi } = this.props;
    const { exchangeRates, id, value } = this.state;

    const description = document.getElementById('Descrição').value;
    // console.log(description);
    const method = document.getElementById('Método de pagamento').value;
    // console.log(method);
    const tag = document.getElementById('tag').value;
    // console.log(tag);
    const currency = document.getElementById('moeda').value;
    // console.log(currency);

    // const value = '';
    await fetchApi()
      .then(() => sendExpenses({
        id, value, currency, method, tag, description, exchangeRates,
      }));
    this.setState({ id: id + 1 });
  }

  category() {
    return (
      <label htmlFor="tag">
        tag
        <select id="tag" name="tag" onClick={ this.handleChange }>
          <option>
            Lazer
          </option>
          <option>
            Alimentação
          </option>
          <option>
            Trabalho
          </option>
          <option>
            Transporte
          </option>
          <option>
            Saúde
          </option>
        </select>
      </label>
    );
  }

  form(currencies) {
    return (
      <>
        <label htmlFor="Valor">
          Valor:
          <input type="number" id="Valor" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input
            type="text"
            name="description"
            onChange={ this.handleChange }
            id="Descrição"
          />
        </label>
        <label htmlFor="moeda">
          moeda
          <select
            id="moeda"
            name="currency"
            onClick={
              this.handleChange
            }
          >
            { currencies.filter((currency) => currency !== 'USDT').map((currency) => (
              <option key={ currency } value={ currency }>
                {currency}
              </option>)) }
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento
          <select name="method" id="Método de pagamento" onClick={ this.handleChange }>
            Método de pagamento
            <option name="Dinheiro" value="Dinheiro">
              Dinheiro
            </option>
            <option name="Cartão de crédito" value="Cartão de crédito">
              Cartão de crédito
            </option>
            <option name="Cartão de crédito" value="Cartão de débito">
              Cartão de débito
            </option>
          </select>
        </label>
        {this.category()}
      </>
    );
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  header(user, money) {
    const { expenses } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          email:
          { user }
        </h3>
        <h3 data-testid="total-field">
          Despesa Total: R$
          {expenses.length === 0 ? 0
            : expenses.reduce((acc, curr) => acc
              + (curr.exchangeRates[curr.currency].ask) * (curr.value), 0)}

          {' '}
        </h3>
        <h3 data-testid="header-currency-field">
          { money.length === 0 ? 'BRL' : money }
        </h3>
      </header>

    );
  }

  updateState(currencies, batata) {
    this.setState({ exchangeRates: batata });
    this.setState({ all: currencies });
  }

  render() {
    const { user } = this.props;
    const { currency, all } = this.state;
    return (
      <div>
        { this.header(user, currency)}
        <form>
          { this.form(all)}
          <button type="button" onClick={ this.onClick }> Adicionar despesa </button>
        </form>

      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: (requirement = 'fetchApi') => dispatch(FetchApi(requirement)),
  fetch: (requirement = 'fetch') => dispatch(FetchApi(requirement)),
  sendExpenses: (e) => dispatch(getExpenses(e)),
});

// const mapStateToProps = (state) => ({
//   imgPath: state.gallery.imgURL.file,
//   isLoading: state.gallery.isLoading,
//   useDefaultImg: state.gallery.defaultImg,
// });

Wallet.propTypes = {
  user: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
