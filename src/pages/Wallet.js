import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <div data-testid="email-field">
          Usuário:
          {' '}
          {user.email}
        </div>
        <div data-testid="total-field">
          0
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    wallet: state.wallet,
  };
}

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = PropTypes.shape({
  email: PropTypes.string,
}).isRequired;
