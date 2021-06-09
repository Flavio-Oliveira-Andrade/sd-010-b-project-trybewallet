import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h4 data-testid="email-field">{ email }</h4>
        <h4 data-testid="total-field">Total de depesas: 0</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = ({
  email: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps)(Wallet);
