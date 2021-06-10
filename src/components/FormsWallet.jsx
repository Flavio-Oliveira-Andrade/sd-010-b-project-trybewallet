import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';
// import formCurrency from '../functions';

class FormsWallet extends Component {
  componentDidMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  render() {
    const { currencies } = this.props;
    const currencyList = [...currencies];
    console.log(currencies);
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="number"
            name="value"
          />
        </label>
        <label
          htmlFor="coin"
        >
          Moeda:
          <select
            id="coin"
            type="number"
            name="currency"
          >
            {(currencyList).filter((coin) => coin !== 'USDT')
              .map((coin) => (
                <option
                  key={ coin }
                >
                  {coin}
                </option>
              ))}
          </select>
        </label>
      </div>
    );
  }
}

FormsWallet.propTypes = {
  fetchCoins: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(
    fetchCurrencies(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
