import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchOnComponentDidMount } from '../actions';
import MapCurrencies from '../components/MapCurrencies';
import popOutUSDT from '../selectors';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchMapDispatchToProps } = this.props;
    fetchMapDispatchToProps();
  }

  render() {
    const { email, currencies } = this.props;
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

          {(currencies && currencies.length)
            ? <MapCurrencies currencies={ currencies } /> : 'nao há moedas' }

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
  const { user: { email }, wallet: { currencies } } = state;
  const filteredCurrencies = popOutUSDT(Object.values(currencies));
  return {
    email,
    currencies: filteredCurrencies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMapDispatchToProps: () => dispatch(fetchOnComponentDidMount()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchMapDispatchToProps: PropTypes.func.isRequired,
  currencies: PropTypes.shape(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
