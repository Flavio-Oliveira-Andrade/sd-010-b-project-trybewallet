import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';
import {
  formValue,
  formCurrency,
  formPayment,
  formTag,
  formDescription,
} from '../functions';

class FormsWallet extends Component {
  componentDidMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  render() {
    const { currencies } = this.props;
    const listCurrency = Object.keys(currencies); // https://qastack.com.br/programming/5072136/javascript-filter-for-objects // Aula : Object 24/03/2021
    console.log(listCurrency);
    return (
      <>
        {formValue()}
        {formCurrency(listCurrency)}
        {formPayment()}
        {formTag()}
        {formDescription()}
      </>
    );
  }
}

FormsWallet.propTypes = {
  fetchCoins: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(Object).isRequired,
};

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(
    fetchCurrencies(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
