import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../images/logo-trybe.png';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cambioAtual: 0,
    };
    this.geraForm = this.geraForm.bind(this);
  }

  geraForm() {
    return (
      <form>
        <label htmlFor="valorDespesa">
          Valor
          <input id="valorDespesa" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            <option name="moeda" value="BRL">BRL</option>
          </select>
        </label>
        <label htmlFor="metodoPagamento">
          Método de pagamento
          <select name="metodoPagamento" id="metodoPagamento">
            <option name="metodoPagamento" value="dinheiro">Dinheiro</option>
            <option name="metodoPagamento" value="credito">Cartão de crédito</option>
            <option name="metodoPagamento" value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="categoria" id="categoria">
            <option name="categoria" value="alimentacao">Alimentação</option>
            <option name="categoria" value="lazer">Lazer</option>
            <option name="categoria" value="trabalho">Trabalho</option>
            <option name="categoria" value="transporte">Transporte</option>
            <option name="categoria" value="saude">Saúde</option>
          </select>
        </label>
      </form>);
  }

  render() {
    const { email } = this.props;
    const { total, cambioAtual } = this.state;
    return (
      <main>
        <header>
          <img
            className="logo-trybe"
            src={ logo }
            alt="Logo Trybe"
          />
          <h3 data-testid="email-field">
            {' '}
            Email:
            { email }
          </h3>
          <h3 data-testid="total-field">
            Total Despesas:
            {total}
          </h3>
          <h3 data-testid="header-currency-field">
            {' '}
            Câmbio Atual BRL:
            {cambioAtual}
          </h3>
        </header>
        {this.geraForm()}
      </main>);
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
