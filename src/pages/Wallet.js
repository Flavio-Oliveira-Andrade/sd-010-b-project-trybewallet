import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <Header email={ email } />
    );
  }
}

const mapStateToProps = ({
  user: { email } }) => ({ email });

Wallet.propTypes = {
  email: Proptypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
