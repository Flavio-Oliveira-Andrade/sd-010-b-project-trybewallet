import React from 'react';
import ExpenseForms from '../components/ExpenseForms';
import Header from '../components/Header';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      expenseToEdit: {},
      isEditMode: false,
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.updateCurrencies = this.updateCurrencies.bind(this);
    this.editExpense = this.editExpense.bind(this);
    this.renderAddBtn = this.renderAddBtn.bind(this);
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

  editExpense(expense) {
    this.setState({ expenseToEdit: expense, isEditMode: true });
  }

  renderAddBtn() {
    this.setState({ isEditMode: false });
  }

  render() {
    const { currencies, expenseToEdit, isEditMode } = this.state;
    return (
      <>
        <Header />
        <ExpenseForms
          currencies={ currencies }
          fetchAPI={ this.fetchAPI }
          expenseToEdit={ expenseToEdit }
          isEditMode={ isEditMode }
          renderAddBtn={ this.renderAddBtn }
        />
        <ExpenseTable editExpense={ this.editExpense } />
      </>
    );
  }
}

export default Wallet;
