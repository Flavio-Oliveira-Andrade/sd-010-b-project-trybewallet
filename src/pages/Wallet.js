import React from 'react';
// import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    // const { currencies, email, expenses } = this.props;

    return (
      <div>
        <Header />

        <form>
          <label htmlFor="value">
            <input
              id="value"
              type="text"
            />
            Valor
          </label>
          <label htmlFor="description">
            <input
              id="description"
              type="textarea"
            />
            Descrição
          </label>
          <label htmlFor="currency">
            <select id="currency">Moeda</select>
          </label>
          <option id="payment">
            <select id="payment">Dinheiro</select>
            <select id="payment">Cartão de crédito</select>
            <select id="payment">Cartão de débito</select>
            Método de pagamento
          </option>
          <option id="option">
            <select id="option">Alimentação</select>
            <select id="option">Lazer</select>
            <select id="option">Trabalho</select>
            <select id="option">Transporte</select>
            <select id="option">Saúde</select>
            Tag
          </option>
        </form>
      </div>

    );
  }
}
// Wallet.propTypes = {
//   currencies: propTypes.arrayOf().isRequired,
//   expenses: propTypes.number.isRequired,
//   email: propTypes.string.isRequired,
// };

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  email: state.user.email,
});
export default connect(mapStateToProps, null)(Wallet);
