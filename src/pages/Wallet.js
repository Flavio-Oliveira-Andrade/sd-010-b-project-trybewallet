import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Header from '../components/Header';
import { preencheCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json());
      // Dica de Fernanda Porto:
    delete response.USDT;
    const { addCurrencies } = this.props;
    addCurrencies(Object.keys(response));
  }

  render() {
    return (
      <>
        <Header />
        <Form />
      </>
    );
  }
}

const mapDispathToProps = (dispatch) => ({
  addCurrencies: (despesas) => dispatch(preencheCurrencies(despesas)),
});

Wallet.propTypes = {
  addCurrencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispathToProps)(Wallet);
