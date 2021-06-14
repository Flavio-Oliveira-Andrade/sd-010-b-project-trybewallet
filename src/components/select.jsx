import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { onChange, payment, tag } = this.props;
    return (
      <>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment" onChange={ onChange } value={ payment }>
            <option selected defaultValue="null">...</option>
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ onChange } value={ tag }>
            <option selected defaultValue="null">...</option>
            <option value="food">Alimentação</option>
            <option value="joy">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

Select.defaultProps = {
  payment: '',
  tag: '',
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  payment: PropTypes.string,
  tag: PropTypes.string,
};
