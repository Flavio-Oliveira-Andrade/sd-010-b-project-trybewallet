import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <>
        <h4 data-testid="email-field">{userEmail}</h4>
        <span data-testid="total-field">
          Despesa Total:
          {' '}
          {0}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </>
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
