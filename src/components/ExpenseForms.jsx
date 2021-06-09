import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputElement from './InputElement';
import SelectElement from './SelectElement';
import { addExpense } from '../actions';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class ExpenseForms extends Component {
  constructor(props) {
    super(props);
    const { expenses } = props;
    this.state = {
      id: expenses.length,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},

    };
    this.callAction = this.callAction.bind(this);
  }

  async callAction() {
    const { addNewExpense, expenses, fetchAPI } = this.props;
    const getCurrencies = await fetchAPI();
    this.setState({ exchangeRates: getCurrencies, id: expenses.length });
    addNewExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <InputElement
          type="text"
          name="value"
          label="Valor"
          onChange={ (e) => this.setState({ value: e.target.value }) }
        />
        <InputElement
          type="text"
          name="description"
          label="Descrição"
          onChange={ (e) => this.setState({ description: e.target.value }) }
        />

        <SelectElement
          name="currency"
          label="Moeda"
          options={ currencies }
          onChange={ (e) => this.setState({ currency: e.target.value }) }
        />
        <SelectElement
          name="method"
          label="Método de pagamento"
          options={ paymentMethod }
          onChange={ (e) => this.setState({ method: e.target.value }) }
        />

        <SelectElement
          name="tag"
          label="Tag"
          options={ tags }
          onChange={ (e) => this.setState({ tag: e.target.value }) }
        />

        <button type="button" onClick={ this.callAction }>Adicionar Despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispach) => ({
  addNewExpense: (state) => dispach(addExpense(state)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseForms.propTypes = {
  currencies: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForms);
