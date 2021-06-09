import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, string, object } from 'prop-types';
import { updateCurrencies } from '../actions';
import { Header, Forms } from '../components';
import coins from '../services/apiCoins';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { propUpdateCurrencies } = this.props;
    propUpdateCurrencies(Object.keys(await coins()));
  }

  render() {
    const { email, currencies, expenses } = this.props;
    return (
      <>
        <Header email={ email } expenses={ expenses } />
        <Forms currencies={ currencies } />
        <Table expenses={ expenses } />
      </>
    );
  }
}

const mapStateToProps = ({
  user: { email }, wallet: { currencies, expenses } }) => ({
  email, currencies, expenses });

const mapDispatchToProps = (dispatch) => ({
  propUpdateCurrencies: (data) => dispatch(updateCurrencies(data)),
});

Wallet.propTypes = {
  email: string,
  expenses: arrayOf(object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
