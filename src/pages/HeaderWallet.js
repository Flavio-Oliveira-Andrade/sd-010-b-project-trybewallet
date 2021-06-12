import React from 'react';

class HeaderWallet extends React.Component {
  render() {
    const { value, onChange, email } = this.props;
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

export default HeaderWallet;
