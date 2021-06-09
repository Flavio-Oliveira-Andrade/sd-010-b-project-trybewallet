import React from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps, null)(Wallet);
