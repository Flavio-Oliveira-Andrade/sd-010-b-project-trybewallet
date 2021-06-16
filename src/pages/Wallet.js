import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const valor = 0;
    const { email } = this.props;
    return (
      <div>
        <header>
          <h5 data-testid="email-field">
            {email}
          </h5>
          <h3 data-testid="total-field">
            {valor}
          </h3>
          <h4 data-testid="header-currency-field">
            BRL
          </h4>
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
