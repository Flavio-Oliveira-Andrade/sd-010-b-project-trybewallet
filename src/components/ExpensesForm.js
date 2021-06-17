import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import responseAction from '../actions/responseApiAction';
import addExpenseAction from '../actions/addExpenseAction';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      price: '',
      selectedCurrency: '',
      paymentMethod: '',
      tag: '',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePaymentMethod = this.handlePaymentMethod.bind(this);
    this.handleTag = this.handleTag.bind(this);
  }

  componentDidMount() {
    const { currencyValidation } = this.props;
    currencyValidation();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { currencyValidation, currencies, addExpenseValidation } = this.props;
    currencyValidation();
    delete currencies.USDT;
    this.setState({ exchangeRates: currencies }, () => {
      addExpenseValidation(this.state);
    });
    this.setState((previousState) => ({ id: previousState.id + 1 }));
  }

  handlePaymentMethod() {
    const { paymentMethod } = this.state;
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={ paymentMethod }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  handleTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="option">
        Tag
        <select
          id="option"
          name="tag"
          value={ tag }
          onChange={ this.handleChange() }
        >
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
    const { currencies } = this.props;
    const { price, selectedCurrency, description } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="price">
            Valor
            <input
              id="price"
              name="price"
              value={ price }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              name="description"
              value={ description }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="selectedCurrency">
            Moeda
            <select
              id="selectedCurrency"
              name="selectedCurrency"
              value={ selectedCurrency }
              onChange={ this.handleChange }
            >
              {Object.keys(currencies).map((currency) => (
                <option key={ currency }>{currency}</option>
              ))}
            </select>
          </label>
          {this.handlePaymentMethod()}
          {this.handleTag()}
          <button type="submit">Adicionar Despesas</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currencyValidation: () => dispatch(responseAction()),
  addExpenseValidation: (expenses) => dispatch(addExpenseAction(expenses)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

ExpensesForm.propTypes = ({
  currencies: PropTypes.arrayOf.isRequired,
  currencyValidation: PropTypes.func.isRequired,
  addExpenseValidation: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
