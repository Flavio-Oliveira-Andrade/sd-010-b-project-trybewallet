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
      <select name="categoria">
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
            {' '}
            Despesa Total: R$ 0,00
            {' '}
          </h3>
          <h3 data-testid="header-currency-field">{' BRL '}</h3>
        </header>
        <section>
          <label htmlFor="Valor">
            Valor:
            <input type="number" name="Valor" />
          </label>
          <label htmlFor="Descrição">
            Descrição:
            <input type="text" name="Descrição" />
          </label>
          <label htmlFor="Moeda">
            Moeda:
            <select name="Moeda">
              batata
            </select>
          </label>
          Método de pagamento:
          <select name="Método de pagamento">
            <option>
              Cartão de crédito
            </option>
            <option>
              Cartão de débito
            </option>
          </select>

          {this.category()}
        </section>
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
