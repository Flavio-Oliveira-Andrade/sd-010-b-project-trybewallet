import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

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
          <WalletForm />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user: { email } } = state;
  return {
    email,
  };
};

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
