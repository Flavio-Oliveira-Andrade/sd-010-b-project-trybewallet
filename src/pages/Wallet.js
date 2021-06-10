import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <h1 data-testid="email-field">{ email }</h1>
          <h3 data-testid="total-field">0</h3>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <form>
          <label htmlFor="amount">
            Valor
            <input type="number" name="amount" id="amount" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <input name="currency" id="currency" />
            <select>
              <option value="BRL">BRL</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select name="payment" id="payment">
              <option value="money">Dinheiro</option>
              <option value="credit card">Cartão de crédito</option>
              <option value="debit card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
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
