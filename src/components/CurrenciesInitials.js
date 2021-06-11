import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  fetchCurrencyInitials as fetchCurrencyInitialsThunk,
} from '../actions';

class CurrenciesInitials extends Component {
  componentDidMount() {
    const { fetchCurrencyInitials } = this.props;
    fetchCurrencyInitials();
  }

  render() {
    const { currencies, handleChange, defaultValue } = this.props;

    return (
      <label htmlFor="currency">
        Moeda:
        <select id="currency" onChange={ handleChange } defaultValue={ defaultValue }>
          {currencies.map((currency, index) => (
            <option key={ index } value={ currency }>
              {currency}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencyInitials: () => dispatch(fetchCurrencyInitialsThunk()),
});

CurrenciesInitials.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencyInitials: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesInitials);
