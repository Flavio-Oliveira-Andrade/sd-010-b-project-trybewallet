import React from 'react';

import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyOptions: [],
    };

    this.fetchCurrencyOptions = this.fetchCurrencyOptions.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencyOptions();
  }

  async fetchAPI() {
    const getCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await getCurrencies.json();
    delete response.USDT;

    return response;
  }

  async fetchCurrencyOptions() {
    const getCurrencies = await this.fetchAPI();
    const currenciesUntreated = Object.keys(getCurrencies);
    const currencyOptions = currenciesUntreated.reduce((acc, currencyCode) => {
      const THREE_LETTERS = 3;
      if (currencyCode.length <= THREE_LETTERS) {
        acc = [...acc, currencyCode];
      }
      return acc;
    }, []);

    this.setState({ currencyOptions });
  }

  render() {
    const { currencyOptions } = this.state;

    return (
      <>
        <Header />
        <ExpenseForm
          currencyOptions={ currencyOptions }
          fetchAPI={ this.fetchAPI }
        />
      </>
    );
  }
}

export default Wallet;
