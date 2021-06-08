import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        TrybeWallet
        <header>
          <p data-testid="email-field">
            Boas vindas
            {' '}
            {email}
            {' '}
          </p>
          {' '}
          <br />
          {' '}
          <div data-testid="total-field">
            Despesa Total:
            { 0 }
            {' '}
          </div>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
