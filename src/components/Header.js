import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { emailLogin } = this.props;
    return (
      <header>
        <section>
          <span data-testid="email-field">{ emailLogin }</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </section>
        <section>
          <form>
            <label htmlFor="expenses">
              Valor
              <input
                type="number"
                value={}
                name="expenses"
              />
            </label>
            <label htmlFor="descrition">
              Descrição
              <input
                type="string"
                value={}
                name="descrition"
              />
            </label>
            <label htmlFor="coin">
              Moeda
              <select
                name="coin"
              >
              </select>
            </label>
            <label htmlFor="payment">
              Método de Pagamento
              <select
                name="payment"
              >
                <option value={}>Dinheiro</option>
                <option value={}>Cartão de Crédito</option>
                <option value={}>Cartão de Débito</option>
              </select>
            </label>
            <label htmlFor="categories">
              Tag
              <select
                name="categories"
              >
                <option value={}>Alimentação</option>
                <option value={}>Lazer</option>
                <option value={}>Trabalho</option>
                <option value={}>Transporte</option>
                <option value={}>Saúde</option>
              </select>
            </label>
          </form>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  emailLogin: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailLogin: state.user.email,
});

export default connect(mapStateToProps)(Header);
