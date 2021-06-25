import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenses, fetchApi, fetchApiCoin } from '../actions';

class FormExpanses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };

    this.handlechange = this.handlechange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.inputMethod = this.inputMethod.bind(this);
    this.inputCurrency = this.inputCurrency.bind(this);
    this.inputTag = this.inputTag.bind(this);
  }

  componentDidMount() {
    const { saveCoin } = this.props;
    saveCoin();
  }

  handleClick() {
    const { saveExpense } = this.props;
    const { id } = this.state;
    this.setState({ id: id + 1 });
    saveExpense(this.state);
  }

  handlechange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  inputMethod() {
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select id="payment" name="method" onChange={ this.handlechange }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputCurrency() {
    const { coinNames } = this.props;
    return (
      <label htmlFor="currencie">
        Moeda
        <select id="currencie" name="currency" onChange={ this.handlechange }>
          { coinNames.map((currencie) => (
            <option
              value={ currencie }
              key={ currencie }
            >
              { currencie }
            </option>
          ))}
        </select>
      </label>
    );
  }

  inputTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ this.handlechange }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
          />
        </label>
        { this.inputCurrency() }
        { this.inputMethod() }
        {this.inputTag() }
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesas
        </button>
      </form>
    );
  }
}

FormExpanses.propTypes = {
  saveCoin: PropTypes.func.isRequired,
  coinNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coinNames: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveCoin: () => dispatch(fetchApiCoin()),
  saveExpense: (expense) => dispatch(fetchApi(expense)),
  expense: (expenses) => dispatch(addExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpanses);
