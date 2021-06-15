import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="pagamento">
          <p>Método de pagamento</p>
          <select id="pagamento" name="typePagamento" onClick={ handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tipo">
          <p>Tag</p>
          <select id="tipo" name="typeDespesa" onClick={ handleChange }>
            <option value="alimentacao"> Alimentação </option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propsType = {
  handleChange: PropTypes.func.isRequired,
};

export default Select;
