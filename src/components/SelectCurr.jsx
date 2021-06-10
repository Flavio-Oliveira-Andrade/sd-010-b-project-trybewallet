import React from 'react';

class SelectCurr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    console.log(this.fetchCurrencies());
  }

  async fetchCurrencies() {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resolve) => resolve.json());
    const currenciesKeys = Object.keys(result);
    const currenciesUsed = currenciesKeys.filter((curr) => curr !== 'USDT');
    this.setState({
      currencies: currenciesUsed,
    });
    console.log(currenciesUsed);
  }

  render() {
    const { currencies } = this.state;
    return (
      <label htmlFor="moeda">
        <select id="moeda" name="moeda">
          {currencies.map((cur, key) => (
            <option key={ key }>
              { cur }
            </option>))}
        </select>
      </label>
    );
  }
}

export default SelectCurr;
