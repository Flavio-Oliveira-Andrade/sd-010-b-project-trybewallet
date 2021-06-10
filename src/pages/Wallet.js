import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    return <div>TrybeWallet</div>;
  }
}

const mapStateToProps = (state) => ({
  lerpage: state.page,
});

export default connect(mapStateToProps, null)(Wallet);
