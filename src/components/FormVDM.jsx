import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormVDM extends Component {
  render() {
    const { value, description, handleChange, method } = this.props;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type=""
            value={ value }
            name="value"
            id="value"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            value={ description }
            name="description"
            id="description"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            type="text"
            value={ method }
            name="method"
            id="method"
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

FormVDM.propTypes = {
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(FormVDM);
