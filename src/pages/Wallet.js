import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        {email}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

// const mapDispatchToProps = () => {
// };
Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
