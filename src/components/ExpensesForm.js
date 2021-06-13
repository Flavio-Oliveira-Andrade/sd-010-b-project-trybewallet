import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';

class ExpensesForm extends Component {
  handleOnSubmit(event) {
    event.preventDefault();
  }

  render() {
    const PAYMENT_METHODS = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const CATEGORIES = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form onSubmit={ this.handleOnSubmit }>
        <Input text="Valor" inputName="value" />
        <Input text="Descrição" inputName="description" />
        <Select text="Moeda" id="currencies" options={ [] } />
        <Select
          text="Método de Pagamento"
          id="payment_method"
          options={ PAYMENT_METHODS }
        />
        <Select text="Tag" id="categories" options={ CATEGORIES } />
      </form>
    );
  }
}

export default ExpensesForm;
