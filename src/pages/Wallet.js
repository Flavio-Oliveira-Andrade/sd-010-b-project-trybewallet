import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailLog } = this.props;
    return (
      <div>
        <header id="header">
          <h5 data-testid="email-field">{ emailLog }</h5>
          <h6 data-testid="total-field">0</h6>
          <h6 data-testid="header-currency-field">BRL</h6>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailLog: state.user.email });

Wallet.propTypes = {
  emailLog: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
