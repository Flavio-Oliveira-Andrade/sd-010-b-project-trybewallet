import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import WalletForms from '../Components/WalletForms';
import { requestMoedasApi } from '../actions';
import getApi from '../services/requestApi';

class Wallet extends React.Component {
  componentDidMount() {
    const { updateMoedas } = this.props;
    console.log(typeof (updateMoedas));
    updateMoedas(getApi());
  }

  render() {
    return (
      <>
        <Header />
        <WalletForms />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateMoedas: (moedas) => dispatch(requestMoedasApi(moedas)),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  updateMoedas: PropTypes.func.isRequired,
};
