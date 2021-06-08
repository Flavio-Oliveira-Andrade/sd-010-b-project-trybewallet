import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <header>
        <h1 data-testid="email-field">
          {emailUser}
        </h1>
        <p data-testid="total-field">
          0
          <span data-testid="header-currency-field">
            BRL
          </span>
        </p>

      </header>
    );
  }
}

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
