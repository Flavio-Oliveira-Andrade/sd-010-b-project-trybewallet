import React from 'react';
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

function Wallet() {
  const email = useSelector((state) => state.user.email);
  const dispenses = useSelector((state) => state.wallet.expenses);
  const currency = useSelector((state) => state.wallet.currencies);

  return (
    <>
      <header>
        <p data-testid="email-field">{`Email: ${email}`}</p>
        <p data-testid="total-field">{`Dispensa total: ${dispenses}`}</p>
        <p data-testid="header-currency-field">{ currency }</p>
      </header>
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" name="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select role="combobox" name="currency"> </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select role="combobox" name="payment">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="currency">
          Tag
          <select role="combobox" name="currency">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    </>
  );
}

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     email: state.user.user.email,
//   };
// }
//
// export default connect(mapStateToProps)(Wallet);

// Wallet.propTypes = {
//   email: PropTypes.string.isRequired,
// };

export default Wallet;
