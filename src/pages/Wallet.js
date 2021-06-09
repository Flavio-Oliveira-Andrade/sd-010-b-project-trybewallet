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
          <span data-testid="email-field">
            Olá, esse é o seu e-mail:
            {' '}
            {email}
            {' - '}
          </span>
          <div>
            <span data-testid="total-field">
              Valor gasto:
              {' '}
              {0}
              {' '}
            </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
      </div>
    );
  }
}
const mapToStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapToStateToProps, null)(Wallet);
