import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import travoltaWallet from '../images/travoltaWallet.gif';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <main>
        <header className="headerWallet">
          <img src={ travoltaWallet } alt="travoltaWallet" className="travoltaWallet" />
          <p data-testid="email-field">{userEmail}</p>
          <p data-testid="total-field">-0-</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
