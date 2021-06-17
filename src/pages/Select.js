import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="pagamento">
          <p>Método de pagamento</p>
          <select id="pagamento" onClick={ handleChange }>
            <option name="method" value="Dinheiro">Dinheiro</option>
            <option name="method" value="Cartão de crédito">Cartão de crédito</option>
            <option name="method" value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tipo">
          <p>Tag</p>
          <select id="tipo" name="tag" onClick={ handleChange }>
            <option value="Alimentação"> Alimentação </option>
            <option value="lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Select;
