import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormVDM extends Component {
  render() {
    const { value, description, handleChange, method } = this.props;
    return (
      <div>
        <label htmlFor="valor-despesa">
          Valor:
          <input
            type=""
            value={ value }
            name="value"
            id="valor-despesa"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="descricao-despesa">
          Descrição:
          <input
            type="text"
            value={ description }
            name="description"
            id="descricao-despesa"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="metodo-pagamento-despesa">
          Método de pagamento:
          <select
            type="text"
            value={ method }
            name="method"
            id="metodo-pagamento-despesa"
            onChange={ handleChange }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
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
