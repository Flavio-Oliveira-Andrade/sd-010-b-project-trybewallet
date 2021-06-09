import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.category = this.category.bind(this);
  }

  category() {
    return (
      <label htmlFor="tag">
        tag
        <select id="tag">
          <option>
            Alimentação
          </option>
          <option>
            Lazer
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

  render() {
    const { user } = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">
            email:
            {' '}
            { user }
          </h3>
          <h3 data-testid="total-field">
            Despesa Total: R$ 0,00
            {' '}
          </h3>
          <h3 data-testid="header-currency-field">{' BRL '}</h3>
        </header>
        <form>
          <label htmlFor="Valor">
            Valor:
            <input type="number" id="Valor" />
          </label>
          <label htmlFor="Descrição">
            Descrição:
            <input type="text" id="Descrição" />
          </label>
          <label htmlFor="moeda">
            moeda
            <select id="moeda">
              moeda
            </select>
          </label>
          <label htmlFor="Método de pagamento">
            Método de pagamento
            <select id="Método de pagamento">
              Método de pagamento
              <option name="Cartão de crédito">
                Cartão de crédito
              </option>
              <option name="Cartão de crédito">
                Cartão de débito
              </option>
              <option name="Dinheiro">
                Dinheiro
              </option>
            </select>
          </label>
          {this.category()}
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Wallet.propTypes = {
  user: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
