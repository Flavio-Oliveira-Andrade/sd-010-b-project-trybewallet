import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  form() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="name" id="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input type="text" name="name" id="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            ola
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option value="money">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="categoria">
          Tag
          <select id="categoria">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { userEmailState } = this.props;
    return (
      <main>
        <header>
          <p
            data-testid="email-field"
          >
            Email:
            {' '}
            {userEmailState}
          </p>
          <p data-testid="total-field">Despesa Total: 0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        {this.form()}
      </main>
    );
  }
}

Wallet.propTypes = {
  userEmailState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmailState: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
