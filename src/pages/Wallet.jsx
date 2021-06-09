import React from 'react';
import ExpenseForms from '../components/ExpenseForms';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.updateCurrencies = this.updateCurrencies.bind(this);
  }

  componentDidMount() {
    this.updateCurrencies();
  }

  async updateCurrencies() {
    const currencies = await this.fetchAPI();
    this.setState({ currencies: Object.keys(currencies) });
  }

  async fetchAPI() {
    const getCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await getCurrencies.json();
    delete response.USDT;

    return response;
  }

  render() {
    const { currencies } = this.state;
    return (
      <>
        <Header />
        <ExpenseForms currencies={ currencies } fetchAPI={ this.fetchAPI } />
      </>
    );
  }
}

export default Wallet;
