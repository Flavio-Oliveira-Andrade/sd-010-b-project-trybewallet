import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      expenses:'',
      descrition: '',
      coin:'',
      payment:'money',
      categories:'food',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target,
    this.setState({
      [name]: value,
    });
  }

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
                value={ this.state.expenses }
                name="expenses"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="descrition">
              Descrição
              <input
                type="string"
                value={ this.state.descrition }
                name="descrition"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="coin">
              Moeda
              <select
                name="coin"
                value={ this.state.coin }
                onChange={ this.handleChange }
              >
              </select>
            </label>
            <label htmlFor="payment">
              Método de Pagamento
              <select
                name="payment"
                value={ this.state.payment }
                onChange={ this.handleChange }
              >
                <option value="money">Dinheiro</option>
                <option value="creditCard">Cartão de Crédito</option>
                <option value="debitCard">Cartão de Débito</option>
              </select>
            </label>
            <label htmlFor="categories">
              Tag
              <select
                name="categories"
                value={ this.state.categories }
                onChange={ this.handleChange }
              >
                <option value="food">Alimentação</option>
                <option value="roby">Lazer</option>
                <option value="job">Trabalho</option>
                <option value="transport">Transporte</option>
                <option value="hearth">Saúde</option>
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
