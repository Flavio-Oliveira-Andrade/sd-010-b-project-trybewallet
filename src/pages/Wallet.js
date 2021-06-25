import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <h4 data-testid="email-field">
            {` ${email}`}
          </h4>
          <h4 data-testid="total-field">
            0
          </h4>
          <h4 data-testid="header-current-field">
            BRL
          </h4>
        </header>
        <div />
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
