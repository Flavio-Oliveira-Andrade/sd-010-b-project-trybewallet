import React from 'react';
import PropTypes from 'prop-types';

import PaymentMethodOptions from './PaymentMethodOptions';
import TagOptions from './TagOptions';

class WalletForm extends React.Component {
  render() {
    const { currencies } = this.props;

    const currencyOptions = currencies.map((currency, index) => (
      <option key={ index }>
        {currency}
      </option>));

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" placeholder="0" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            { currencies ? currencyOptions : null }
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="payment-method">
          Método de Pagamento
          { PaymentMethodOptions }
        </label>
        <label htmlFor="tag">
          Tag
          { TagOptions }
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WalletForm;
