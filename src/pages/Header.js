import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Wallet.css';

class Header extends React.Component {
  wallet(expenses) {
    let soma = 0;
    if (expenses.length !== 0) {
      expenses.forEach((expense) => {
        const { value } = expense;
        const { currency } = expense;
        const exch = expense.exchangeRates;
        const ask = parseFloat(exch[currency].ask);
        soma += ask * value;
      });
    }
    return soma;
  }

  render() {
    const { lerEmail, wallet } = this.props;
    return (
      <header>
        <div className="flex">
          <p>Email : </p>
          <p data-testid="email-field">
            {lerEmail}
          </p>
        </div>
        <div className="flex">
          <p>Total : </p>

          <p data-testid="total-field">{this.wallet(wallet)}</p>
        </div>
        <div className="flex">
          <p>Moeda : </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  lerEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  wallet: state.wallet.expenses,
  lerEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
