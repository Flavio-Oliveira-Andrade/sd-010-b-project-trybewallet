import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import '../styles/addExpense.css';
import { addExpense, fetchCurrencies, updateTotalExpense } from '../actions';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);

    const { currencies } = this.props;

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: currencies,
    };

    this.getTotalSum = this.getTotalSum.bind(this);
    this.enviar = this.enviar.bind(this);
  }

  getTotalSum() {
    const { expenses, updateTotalSum } = this.props;
    let sum = 0;
    expenses.forEach((expense) => {
      if (expense.exchangeRates[expense.currency]) {
        sum += expense.value * expense.exchangeRates[expense.currency].ask;
      }
    });
    sum = Math.round(sum * 100) / 100;
    updateTotalSum(sum);
  }

  async enviar() {
    const { sendExpense, expenses, fetcher } = this.props;
    fetcher();
    const { currencies } = this.props;
    await this.setState({ id: expenses.length, exchangeRates: currencies });
    sendExpense(this.state);
    this.getTotalSum();
  }

  render() {
    const { currencies, isFetching } = this.props;
    const hdlChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form className="expense-form">
        <label htmlFor="value">
          <span>Valor: </span>
          <input onChange={ hdlChange } type="number" name="value" id="value" />
        </label>
        <label htmlFor="currency">
          <span>Moeda: </span>
          <select onChange={ hdlChange } name="currency" id="currency">
            { isFetching ? null : Object.keys(currencies).filter((cur) => cur !== 'USDT')
              .map((currency) => <option key={ currency }>{currency}</option>) }
          </select>
        </label>
        <label htmlFor="method">
          <span>Método de pagamento: </span>
          <select onChange={ hdlChange } name="method" id="method">
            {payments.map((method) => <option key={ method }>{method}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          <span>Tag: </span>
          <select onChange={ hdlChange } name="tag" id="tag">
            {tags.map((tag) => <option key={ tag }>{tag}</option>)}
          </select>
        </label>
        <label htmlFor="description">
          <span>Descrição: </span>
          <input onChange={ hdlChange } type="text" name="description" id="description" />
        </label>
        <button type="button" onClick={ this.enviar }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
  expenses: state.wallet.expenses,
  edit: state.wallet.edit,
});

const mapDispatchToProps = (dispatch) => ({
  sendExpense: (localState) => dispatch(addExpense(localState)),
  fetcher: () => dispatch(fetchCurrencies()),
  updateTotalSum: (sum) => dispatch(updateTotalExpense(sum)),
});

AddExpense.propTypes = {
  currencies: PropTypes.object,
  isFetching: PropTypes.bool,
  addExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
