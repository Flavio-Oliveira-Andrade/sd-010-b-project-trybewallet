import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tagItems, payMethod } from './WalletArrays';
import HeaderWallet from './HeaderWallet';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      coins: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resolve = await api.json();
    this.setState({ coins: resolve });
  }

  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  render() {
    const { email } = this.props;
    const { value, coins } = this.state;
    const coinsArr = Object.keys(coins);
    // const { currencies } = initialStateHeader.wallet;
    return (
      <header>
        <HeaderWallet value={ value } email={ email } onChange={ this.handleChange } />
        <form>
          <label htmlFor="value-spent">
            Valor
            <input type="text" name="value-spent" id="value-spent" />
          </label>
          <label htmlFor="description-spent">
            Descrição
            <input id="description-spent" />
          </label>
          <label htmlFor="coint-countrie">
            Moeda
            <select id="coint-countrie">
              {
                coinsArr
                  .filter((item) => item !== 'USDT')
                  .map((item, index) => <option key={ index }>{item}</option>)
              }
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de pagamento
            <select id="payment-method">
              {payMethod.map((item, index) => <option key={ index }>{item}</option>)}
            </select>
          </label>
          <label htmlFor="tag-selection">
            Tag
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
