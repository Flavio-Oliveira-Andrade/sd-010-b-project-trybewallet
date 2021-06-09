import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForms from '../components/ExpenseForms';
import Header from '../components/Header';

const tableHeader = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

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
    const { expenses } = this.props;
    return (
      <>
        <Header />
        <ExpenseForms currencies={ currencies } fetchAPI={ this.fetchAPI } />

        <table>
          <thead>
            <tr>
              {tableHeader.map((th, idx) => <th key={ idx }>{th}</th>)}
            </tr>
          </thead>
          <tbody>
            {expenses.map(({
              value, description, currency, method, tag, exchangeRates,
            }, idx) => {
              const currencyName = exchangeRates[currency].name.split('/');
              return (
                <tr key={ idx }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{`${currency} ${value}`}</td>
                  <td>{currencyName[0]}</td>
                  <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>{parseFloat(value * exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>{currencyName[1]}</td>
                  <td>Editar/Excluir</td>
                </tr>);
            })}
          </tbody>
        </table>

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
