import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Payments extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          onChange={ (e) => handleChange(e) }
        >
          <option key="Dinheiro" value="Dinheiro">Dinheiro</option>
          <option
            key="Cartão de crédito"
            value="Cartão de crédito"
          >
            Cartão de crédito
          </option>
          <option
            key="Cartão de débito"
            value="Cartão de débito"
          >
            Cartão de débito
          </option>
          <option key="Outro" value="Outro">Outro</option>
        </select>
      </label>
    );
  }
}

Payments.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
