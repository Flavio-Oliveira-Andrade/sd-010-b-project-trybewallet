import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectMethod extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          data-testid="method-input"
          id="method"
          name="method"
          onChange={ (e) => handleChange(e.target) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectMethod.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;
