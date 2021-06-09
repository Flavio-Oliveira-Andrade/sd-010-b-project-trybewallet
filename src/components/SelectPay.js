import React from 'react';
import PropTypes from 'prop-types';

export default class SelectPay extends React.Component {
  render() {
    const { handleChange, metodo } = this.props;
    return (
      <label htmlFor="metodo">
        Método de pagamento:
        <select
          id="metodo"
          name="metodo"
          value={ metodo }
          onChange={ (e) => handleChange(e) }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPay.propTypes = {
  metodo: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
