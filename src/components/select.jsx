import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { onChange, method, tag } = this.props;
    return (
      <>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" onChange={ onChange } value={ method }>
            <option selected defaultValue="null">...</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ onChange } value={ tag }>
            <option selected defaultValue="null">...</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

Select.defaultProps = {
  method: '',
  tag: '',
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  method: PropTypes.string,
  tag: PropTypes.string,
};
