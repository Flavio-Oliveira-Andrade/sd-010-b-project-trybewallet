import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  inputText(label) {
    return (
      <label htmlFor={ label }>
        {label}
        <input type="text" name="name" id={ label } />
      </label>
    );
  }

  inputSelectCoins(coins) {
    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency">
          {coins.map((coin) => (<option key={ coin } value={ coin }>{coin}</option>))}
        </select>
      </label>
    );
  }

  inputSelectDefined(label) {
    const pagamento = (
      <label htmlFor="payment">
        {label}
        <select id="payment" name="payment">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Debito">Cartão de crédito</option>
          <option value="Credito">Cartão de débito</option>
        </select>
      </label>);

    const despesas = (
      <label htmlFor="category">
        {label}
        <select id="category" name="category">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>);

    return (label === 'Tag' ? despesas : pagamento);
  }

  render() {
    const { user, moedas } = this.props;
    return (
      <header>
        <section>
          <h1>TRYBEWALLET</h1>
          <h2 data-testid="email-field">{ user || 'name'}</h2>
          <h2 data-testid="total-field">0</h2>
          <h2 data-testid="header-currency-field">BRL</h2>
        </section>
        <section>
          <form>
            {this.inputText('Valor')}
            {this.inputText('Descrição')}
            {this.inputSelectCoins(moedas)}
            {this.inputSelectDefined('Método de pagamento')}
            {this.inputSelectDefined('Tag')}
          </form>
        </section>

      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  user: state.user.email,
  moedas: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
