import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputElement from './InputElement';
import SelectElement from './SelectElement';

const EXPENSE_INITIAL_STATE = {
  expense: '',
  description: '',
  currency: '',
  paymentMethod: '',
  tag: '',
};

const PAYMENT_METHOD = [
  { value: 'cash', optionLabel: 'Dinheiro' },
  { value: 'credit', optionLabel: 'Cartão de Crédito' },
  { value: 'debit', optionLabel: 'Cartão de Débito' },
];

const TAG = [
  { value: 'food', optionLabel: 'Alimentação' },
  { value: 'leisure', optionLabel: 'Lazer' },
  { value: 'work', optionLabel: 'Trabalho' },
  { value: 'transport', optionLabel: 'Transporte' },
  { value: 'health', optionLabel: 'Saúde' },
];

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = EXPENSE_INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { expense, description, currency, paymentMethod, tag } = this.state;

    return (
      <form>
        <InputElement
          label="Valor"
          name="expense"
          value={ expense }
          handleChange={ this.handleChange }
        />

        <InputElement
          label="Descrição"
          name="description"
          value={ description }
          handleChange={ this.handleChange }
        />

        <SelectElement
          label="Moeda"
          name="currency"
          value={ currency }
          options={ ([{ value: 'BRL', optionLabel: 'Real' }]) }
          handleChange={ this.handleChange }
        />

        <SelectElement
          label="Método de Pagamento"
          name="paymentMethod"
          value={ paymentMethod }
          options={ PAYMENT_METHOD }
          handleChange={ this.handleChange }
        />

        <SelectElement
          label="Tag"
          name="tag"
          value={ tag }
          options={ TAG }
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}

// const mapStateToProps = (state) => ({

// });

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  // userData: PropTypes.string.isRequired,
};
