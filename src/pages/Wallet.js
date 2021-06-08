import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
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

          <label htmlFor="currency">
            Moeda:
            <select id="currency">
              <option value="">BRL</option>
            </select>
          </label>

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
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
