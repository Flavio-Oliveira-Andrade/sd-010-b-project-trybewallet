import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchOnComponentDidMount } from '../actions';
import MapCurrencies from '../components/MapCurrencies';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchMapDispatchToProps } = this.props;
    fetchMapDispatchToProps();
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <h2 data-testid="email-field">{email}</h2>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" id="valor" name="valor" />
          </label>
          <label htmlFor="despesa">
            Descrição
            <input type="text" id="despesa" name="despesa" />
          </label>
          <MapCurrencies />
          <label htmlFor="metodo-pagamento">
            Método de pagamento
            <select id="metodo-pagamento" name="metodo-pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria-despesa">
            Tag
            <select id="categoria-despesa" name="categoria-despesa">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { user: { email } } = state;
  return {
    email,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMapDispatchToProps: () => dispatch(fetchOnComponentDidMount()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchMapDispatchToProps: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
