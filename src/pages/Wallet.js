import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  render() {
    const { email } = this.props;
    const { value } = this.state;
    const tagItems = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const payMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <header>
        <p data-testid="email-field">
          Olá
          {' '}
          {email}
        </p>
        <form>
          <label htmlFor="total-spent">
            Total de gastos
            <input
              data-testid="total-field"
              onChange={ this.handleChange }
              id="total-spent"
              type="number"
              value={ value }
            />
          </label>
          <select><option data-testid="header-currency-field">BRL</option></select>
          <label htmlFor="value-spent">
            Valor
            <input type="text" name="value-spent" id="value-spent" />
          </label>
          <label htmlFor="coint-countrie">
            Moeda
            <select id="coint-countrie">
              <option>1</option>
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de pagamento
            <select id="payment-method">
              {payMethod.map((item, index) => <option key={ index }>{item}</option>)}
            </select>
          </label>
          <label htmlFor="tag-selection">
            <select id="tag-selection">
              {tagItems.map((item, index) => <option key={ index }>{item}</option>)}
            </select>
          </label>
        </form>
      </header>
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
