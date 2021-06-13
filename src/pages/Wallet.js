import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { total, cambio } = this.state;
    const { getEmail } = this.props;
    return (
      <>
        <div>TrybeWallet</div>
        <header>
          <p data-testid="email-field">{ getEmail }</p>
          <p data-testid="total-field">{ total }</p>
          <p data-testid="header-currency-field">{ cambio }</p>
        </header>
        <form>
          <label htmlFor="inputValor">
            Valor:
            <input name="value" id="inputValor" />
          </label>
          <label htmlFor="inputDescricao">
            Descrição:
            <input name="description" id="inputDescricao" />
          </label>
          <label htmlFor="input-moeda">
            Moedas:
            <select name="currency" id="input-moeda">
              <option> </option>
            </select>
          </label>
          <label htmlFor="input-pagamento">
            Método de Pagamento:
            <select name="method" id="input-pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão-de-credito">Cartão de crédito</option>
              <option value="Cartão-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-debito">
            Tag
            <select name="tag" id="input-debito">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
