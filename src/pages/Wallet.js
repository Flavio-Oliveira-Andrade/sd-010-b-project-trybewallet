import React from 'react';
import { connect } from 'react-redux';
import FormWallet from '../components/FormWallet';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormWallet />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps, null)(Wallet);
