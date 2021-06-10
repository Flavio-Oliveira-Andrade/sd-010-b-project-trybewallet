import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email, expenses, currencies } = this.props;
    // const gastos = expenses.reducer((total, value) => total + value, 0);
    return (
      <div>
        <header>
          <p data-testid="email-field">
            Email:
            {` ${email}`}
          </p>
          <p data-testid="total-field">
            0
            {` ${expenses}`}
          </p>
          <p data-testid="header-currency-field">
            BRL
            {` ${currencies} `}
          </p>
        </header>
      </div>);
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({ // LER
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Wallet);
