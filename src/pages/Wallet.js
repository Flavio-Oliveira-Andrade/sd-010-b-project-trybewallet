import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    return (
      <header />
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
