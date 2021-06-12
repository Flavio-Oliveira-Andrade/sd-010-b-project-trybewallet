import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { dispatchFetchedCurrencies } from '../actions/index';
import selectCurrencies from '../selectors';

import WalletForm from '../components/WalletForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  render() {
    const { email, currencies, total } = this.props;

    return (
      <div>
        <header>
          <span data-testid="email-field">
            { email }
          </span>
          <span data-testid="total-field">
            { parseFloat(total).toFixed(2) }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <main>
          <WalletForm currencies={ currencies } />
        </main>
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user: { email }, wallet: { currencies, total } } = state;
  const actualCurrencies = selectCurrencies(currencies);
  return {
    email,
    currencies: actualCurrencies,
    total,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: () => dispatch(dispatchFetchedCurrencies()),
});

Wallet.defaultProps = {
  total: '0',
};

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
