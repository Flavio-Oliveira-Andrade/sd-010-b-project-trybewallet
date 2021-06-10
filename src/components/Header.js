import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      expenses: '',
      describe: '',
      coin: '',
      payment: 'money',
      categorie: 'food',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target: { value, id } } = event;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { emailLogin } = this.props;
    const { expenses, describe, coin, payment, categorie } = this.state;
    return (
      <header>
        <span data-testid="email-field">{ emailLogin }</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
        <form>
          <label htmlFor="expenses">
            Valor
            <input
              type="number"
              value={ expenses }
              id="expenses"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="describe">
            Descrição
            <input value={ describe } id="describe" onChange={ this.handleChange } />
          </label>
          <label htmlFor="coin">
            Moeda
            <select id="coin" value={ coin } onChange={ this.handleChange }>
              <option value="a">{}</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de Pagamento
            <select id="payment" value={ payment } onChange={ this.handleChange }>
              <option value="money">Dinheiro</option>
              <option value="creditCard">Cartão de Crédito</option>
              <option value="debitCard">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="categorie">
            Tag
            <select id="categorie" value={ categorie } onChange={ this.handleChange }>
              <option value="food">Alimentação</option>
              <option value="roby">Lazer</option>
              <option value="job">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="hearth">Saúde</option>
            </select>
          </label>
        </form>
      </header>
    );
  }
}

Header.propTypes = {
  emailLogin: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailLogin: state.user.email,
  // coins: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
