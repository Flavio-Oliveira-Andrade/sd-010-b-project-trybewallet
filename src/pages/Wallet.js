import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from './Input';

class Wallet extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <>
        <header>
          <h1 data-testid="email-field">
            {emailUser}
          </h1>
          <p data-testid="total-field">
            0
            <span data-testid="header-currency-field">
              BRL
            </span>
          </p>
        </header>
        <form>
          <Input type="text" name="valor" />
          <Input type="text" name="descrição" />
          <label htmlFor="moeda">
            Moeda:
            <select name="moeda" id="moeda">
              <option>1</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de Pagamento:
            <select name="pagamento" id="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
