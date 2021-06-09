import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from './HeaderWallet';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <HeaderWallet email={ email } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
