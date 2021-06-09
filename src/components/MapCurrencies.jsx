import React from 'react';
import PropTypes from 'prop-types';

class MapCurrencies extends React.Component {
  render() {
    const { currencies } = this.props;

    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda" name="moeda">
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
};

export default MapCurrencies;
