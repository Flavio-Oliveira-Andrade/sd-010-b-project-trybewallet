import React from 'react';
import PropTypes from 'prop-types';

class PaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    };
  }

  render() {
    const { handleChange } = this.props;
    const { types } = this.state;
    return (
      <label htmlFor="method">
        Método de Pagamento
        <select id="method" name="method" onChange={ handleChange }>
          {types.map((type, key) => (
            <option key={ key }>
              { type }
            </option>))}
        </select>
      </label>
    );
  }
}

PaymentMethod.propTypes = {
  handleChange: PropTypes.func,
};

PaymentMethod.defaultProps = {
  handleChange: '',
};

export default PaymentMethod;
