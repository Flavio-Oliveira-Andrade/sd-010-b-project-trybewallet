import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ThreeInputs extends React.Component {
  render() {
    const { value, description, currency, handleChange, coins } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            value={ value }
            id="value"
            name="value"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            value={ description }
            id="description"
            onChange={ handleChange }
            name="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            value={ currency }
            name="currency"
            onChange={ handleChange }
          >
            {Object.keys(coins)
              .map((current) => (current !== 'USDT'
                ? <option>{ current }</option>
                : null))}
          </select>
        </label>
      </div>
    );
  }
}

ThreeInputs.propTypes = {
  coins: PropTypes.shape().isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

export default connect(mapStateToProps)(ThreeInputs);
