import React from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import WalletForms from '../Components/WalletForms';
import { requestMoedasApi } from '../actions';
import getApi from '../services/requestApi';

class Wallet extends React.Component {
  componentDidMount() {
    const { updateMoedas } = this.props;
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
