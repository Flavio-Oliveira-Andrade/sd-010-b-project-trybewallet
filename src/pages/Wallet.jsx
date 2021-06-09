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
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const getCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await getCurrencies.json();
    const currenciesCode = Object.keys(response);
    currenciesCode.splice(currenciesCode.indexOf('USDT'), 1);

    this.setState({ currencies: currenciesCode });
  }

  render() {
    const { currencies } = this.state;
    return (
      <>
        <Header />
        <ExpenseForms currencies={ currencies } />
      </>
    );
  }
}

export default Wallet;
