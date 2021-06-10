import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchApi } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: [],
    };
    this.category = this.category.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  async componentDidMount() {
    const { fetchApi } = this.props;
    await fetchApi().then(() => {
      const { currencies } = this.props;
      return this.updateState(currencies);
    });
  }

  updateState(currencies) {
    this.setState({ currency: currencies });
    // return console.log(`${currencies} pão`);
  }

  category() {
    return (
      <label htmlFor="tag">
        tag
        <select id="tag">
          <option>
            Alimentação
          </option>
          <option>
            Lazer
          </option>
          <option>
            Trabalho
          </option>
          <option>
            Transporte
          </option>
          <option>
            Saúde
          </option>
        </select>
      </label>
    );
  }

  currency(currencies) {
    return (
      <label htmlFor="moeda">
        moeda
        <select id="moeda">
          {/* { console.log(currencies.length)} */}
          { currencies.filter((currency) => currency !== 'USDT').map((currency) => (
            <option key={ currency }>
              {' '}
              {currency}
              {' '}
            </option>)) }
        </select>
      </label>
    );
  }

  render() {
    const { user } = this.props;
    const { currency } = this.state;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">
            email:
            { user }
          </h3>
          <h3 data-testid="total-field">
            Despesa Total: R$ 0,00
          </h3>
          <h3 data-testid="header-currency-field">{' BRL '}</h3>
        </header>
        <form>
          <label htmlFor="Valor">
            Valor:
            <input type="number" id="Valor" />
          </label>
          <label htmlFor="Descrição">
            Descrição:
            <input type="text" id="Descrição" />
          </label>
          { this.currency(currency)}
          <label htmlFor="Método de pagamento">
            Método de pagamento
            <select id="Método de pagamento">
              Método de pagamento
              <option name="Cartão de crédito">
                Cartão de crédito
              </option>
              <option name="Cartão de crédito">
                Cartão de débito
              </option>
              <option name="Dinheiro">
                Dinheiro
              </option>
            </select>
          </label>
          {this.category()}
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(FetchApi()),
});

// const mapStateToProps = (state) => ({
//   imgPath: state.gallery.imgURL.file,
//   isLoading: state.gallery.isLoading,
//   useDefaultImg: state.gallery.defaultImg,
// });

Wallet.propTypes = {
  user: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
