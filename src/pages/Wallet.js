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
            <select id="currency">
              <option value="Moeda">Moeda</option>
            </select>
            Moeda
          </label>
          <label htmlFor="optionPayment">
            <select id="optionPayment">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
            Método de pagamento
          </label>
          <label htmlFor="option">
            <select id="option">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Trabalho">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
            Tag
          </label>
          <button type="button">Adicionar Despesas</button>
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
// https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option
