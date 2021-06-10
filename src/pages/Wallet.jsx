import React from 'react';

import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyOptions: [],
    };
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const getCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await getCurrencies.json();
    const currenciesUntreated = Object.keys(response);
    const currencyOptions = currenciesUntreated.reduce((acc, currencyCode) => {
      const THREE_LETTERS = 3;
      if (currencyCode.length <= THREE_LETTERS) {
        acc = [...acc, { value: currencyCode, optionLabel: currencyCode }];
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
        <ExpenseForm currencyOptions={ currencyOptions } />
      </>
    );
  }
}

export default Wallet;
