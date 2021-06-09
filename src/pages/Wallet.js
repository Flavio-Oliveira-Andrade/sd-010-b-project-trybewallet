import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { userEmailState } = this.props;
    return (
      <header>
        <p
          data-testid="email-field"
        >
          Email:
          {' '}
          {userEmailState}
        </p>
        <p data-testid="total-field">Despesa Total: 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Wallet.propTypes = {
  userEmailState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmailState: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
