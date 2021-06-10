import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { dispatchFetchedCurrencies } from '../actions/index';
import selectCurrencies from '../selectors';

import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies();
  }

  render() {
    const { email, currencies } = this.props;

    return (
      <div>
        <header>
          <span data-testid="email-field">
            { email }
          </span>
          <span data-testid="total-field">
            0
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <main>
          <WalletForm currencies={ currencies } />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user: { email }, wallet: { currencies } } = state;
  const actualCurrencies = selectCurrencies(currencies);
  return {
    email,
    currencies: actualCurrencies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: () => dispatch(dispatchFetchedCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
