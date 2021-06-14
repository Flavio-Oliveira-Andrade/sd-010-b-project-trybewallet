import React from 'react';
import PropTypes from 'prop-types';

class HeaderWallet extends React.Component {
  render() {
    const { value, onChange, email } = this.props;
    console.log(this.props);
    return (
      <div>
        <p data-testid="email-field">
          Olá
          {` ${email}`}
        </p>
        <form>
          <label htmlFor="total-spent">
            Total de gastos
            <input
              data-testid="total-field"
              onChange={ onChange }
              id="total-spent"
              type="number"
              value={ value }
            />
          </label>
          <select><option data-testid="header-currency-field">BRL</option></select>
        </form>
      </div>
    );
  }
}

HeaderWallet.propTypes = {
  value: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default HeaderWallet;
