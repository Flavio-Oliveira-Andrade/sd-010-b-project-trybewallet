import React from 'react';

import Header from '../components/Header';
import Form from '../components/Form';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);

    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const fetchAPI = await fetch(URL);
    const parseJSON = await fetchAPI.json();

    const getCurrencies = Object.keys(parseJSON);
    const removedUSDT = getCurrencies.filter((target) => target !== 'USDT');

    this.setState({
      currencies: [...removedUSDT],
    });
  }

  render() {
    const { currencies } = this.state;

    return (
      <div className="wallet-page">
        <Header />
        <Form currencies={ currencies } />
        <ExpensesTable />
      </div>);
  }
}

export default Wallet;
