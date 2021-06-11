import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dispenses: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { dispenses, currency } = this.state;
    return (
      <>
        <header>
          <h2 data-testid="email-field">{ email }</h2>
          <h2 data-testid="total-field">{ dispenses }</h2>
          <h2 data-testid="header-currency-field">{ currency }</h2>
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
}

function mapStateToProps(state) {
  console.log(state);
  return {
    email: state.user.email,
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
