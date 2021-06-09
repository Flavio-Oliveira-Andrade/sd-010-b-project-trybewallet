import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ wallet: { currencies } }) => currencies;

export default connect(mapStateToProps)(MapCurrencies);
