import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency as fetchCurrencyThunk } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderCurrency = this.renderCurrency.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  renderCurrency() {
    const { currencies } = this.props;

    return (
      <label htmlFor="currency">
        Moeda:
        <select id="currency">
          {currencies.map((currency, index) => (
            <option key={ index } value={ currency[0] }>
              {currency[0]}
            </option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { email } = this.props;
    const { renderCurrency } = this;
    return (
      <>
        <header data-testid="email-field">
          <div>{email}</div>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" />
          </label>

          {renderCurrency()}

          <label htmlFor="payment">
            Método de pagamento:
            <select id="payment">
              <option value="paper">Dinheiro</option>
              <option value="creditCard">Cartão de crédito</option>
              <option value="debitCard">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="type">
            Tag:
            <select id="type">
              <option value="food">Alimentação</option>
              <option value="fun">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transportation">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyThunk()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
