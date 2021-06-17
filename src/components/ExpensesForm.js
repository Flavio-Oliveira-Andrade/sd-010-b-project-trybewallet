import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { fetchCurrencies, fetchExchange } from '../actions';

class ExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.addExpenses = this.addExpenses.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleOnSubmit(event) {
    event.preventDefault();
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  addExpenses() {
    const { getExchange } = this.props;
    const { id } = this.state;
    getExchange(this.state);
    this.setState({ id: id + 1 });
  }

  renderInputs() {
    const { value, description } = this.state;
    return (
      <>
        <Input
          text="Valor"
          inputName="value"
          value={ value }
          onChange={ this.handleOnChange }
        />
        <Input
          text="Descrição"
          inputName="description"
          value={ description }
          onChange={ this.handleOnChange }
        />
      </>
    );
  }

  render() {
    const PAYMENT_METHODS = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const CATEGORIES = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;
    return (
      <form onSubmit={ this.handleOnSubmit }>
        { this.renderInputs() }
        <Select
          text="Moeda"
          id="currencies"
          options={ currencies }
          name="currency"
          onChange={ this.handleOnChange }
        />
        <Select
          text="Método de Pagamento"
          id="payment_method"
          options={ PAYMENT_METHODS }
          name="method"
          onChange={ this.handleOnChange }
        />
        <Select
          text="Tag"
          id="categories"
          options={ CATEGORIES }
          name="tag"
          onChange={ this.handleOnChange }
        />
        <button
          type="button"
          onClick={ this.addExpenses }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  getExchange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  getExchange: (expenses) => dispatch(fetchExchange(expenses)),
});

const mapStateToProps = ({ wallet: { exchangeRates, currencies } }) => ({
  exchangeRates,
  currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
