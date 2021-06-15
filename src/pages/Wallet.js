import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.genderForm = this.genderForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.generateCurrency = this.generateCurrency.bind(this);
  }

  componentDidMount() {
    // const { currenciesFetch } = this.props;
    // currenciesFetch();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  // generateCurrency() {
  //   const { currencies } = this.props;
  //   const currenciesList = Object.keys(currencies);
  //   return (
  //     currenciesList.map((curr) => ((curr !== 'USDT')
  //       ? <option>{curr}</option>
  //       : null))
  //   );
  // }

  genderForm() {
    return (
      <form>
        <label htmlFor="wallet-value">
          Valor:
          <input type="number" name="value" id="wallet-value" />
        </label>
        <label htmlFor="wallet-description">
          Descrição:
          <input type="text" name="description" id="wallet-description" />
        </label>
        <label htmlFor="wallet-exchange">
          Moeda:
          <select
            name="exchange"
            id="wallet-exchange"
            // onChange={
            //   this.handleChange
            // }
          >
            {/* {this.generateCurrency()} */}
          </select>
        </label>
        <label htmlFor="wallet-payment">
          Método de pagamento:
          <select name="payment" id="wallet-payment">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="wallet-tag">
          Tag:
          <select name="tag" id="wallet-tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <main>
        <header>
          <h3 data-testid="email-field">
            Email:
            { email }
          </h3>
          <h3 data-testid="total-field">
            Despesa Total:
            { 0 }
          </h3>
          <h3 data-testid="header-currency-field">
            Câmbio em uso: BRL
          </h3>
        </header>
        {this.genderForm()}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesFetch: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string,
  currencies: PropTypes.objectOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
