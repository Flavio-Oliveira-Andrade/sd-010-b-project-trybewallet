import React from 'react';

class SelectCurr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resolve) => resolve.json());
    const currenciesKeys = Object.keys(result);
    const currenciesUsed = currenciesKeys.filter((curr) => curr !== 'USDT');
    this.setState({
      currencies: currenciesUsed,
    });
  }

  render() {
    const { handleChange } = this.props;
    const { currencies } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" name="currency" onChange={ handleChange }>
          {currencies.map((cur, key) => (
            <option key={ key }>
              { cur }
            </option>))}
        </select>
      </label>
    );
  }
}

SelectCurr.propTypes = {
  handleChange: PropTypes.func,
};

SelectCurr.defaultProps = {
  handleChange: '',
};

export default SelectCurr;
