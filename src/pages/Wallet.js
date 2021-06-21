import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { getEmail } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ getEmail }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input
              type="number"
              id="valor"
              data-testid="value-input"
              value={ 0 }
              // onChange={}
            />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input
              type="text"
              id="descrição"
              data-testid="description-input"
              // onChange={}
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select
              id="moeda"
              data-testid="currency-input"
            >
              <option name="moeda">Dados da API</option>
            </select>
          </label>
          <label htmlFor="metodo">
          Método de pagamento
            <select
              id="metodo"
              data-testid="method-input"
            >
              <option name="metodo">Dinheiro</option>
              <option name="metodo">Cartão de crédito</option>
              <option name="metodo">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
          Tag
          <select
            id="tag"
            data-testid="tag-input"
          >
            <option name="tag">Alimentação</option>
            <option name="tag">Lazer</option>
            <option name="tag">Trabalho</option>
            <option name="tag">Transporte</option>
            <option name="tag">Saúde</option>
          </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
