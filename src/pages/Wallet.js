import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMoedas } from '../actions/index.js';

class Wallet extends React.Component {
  componentDidMount() {
    const { getlistMoedas } = this.props;
    console.log('didmout');
    getlistMoedas();
  }

  render() {
    const { emailUser, currencies } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{ emailUser }</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          <label htmlFor="valor">
            Valor:
            {'  '}
            <input type="text" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              {Object.keys(currencies).map((moeda, index) => (
                <option key={ index } value="moeda">{moeda}</option>
              ))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saúde">Saúde</option>
            </select>
          </label>
        </form>
      </div>);
  }
}
const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getlistMoedas: () => dispatch(getMoedas()),
});

Wallet.propTypes = {
  emailUser: PropTypes.shape({
    email: PropTypes.string,
  }),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
