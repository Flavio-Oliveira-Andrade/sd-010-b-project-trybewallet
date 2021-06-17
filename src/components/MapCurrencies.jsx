import React from 'react';
import PropTypes from 'prop-types';

class MapCurrencies extends React.Component {
  render() {
    const { currencies, onChange } = this.props;

    return (
      <label htmlFor="currency">
        Moeda
        <select onChange={ onChange } id="currency" name="moeda">
          {currencies.map((moeda, index) => (
            <option key={ index }>{moeda.code}</option>
          ))}
        </select>
      </label>
    );
  }
}

MapCurrencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MapCurrencies;
