import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencyThunk } from '../actions/apiActions';
import { payment, tags } from '../services/formData';
import { addExpense } from '../actions/formActions';
import apiURL from '../services/apiURL';

class Form extends React.Component {
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

    this.handleChange = this.handleChange.bind(this);
    this.handleExchanges = this.handleExchanges.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    const { expenses } = this.props;
    this.setState({
      [name]: value,
      id: expenses.length,
    });
  }

  async handleExchanges() {
    const { getExchange } = this.props;
    const answer = await apiURL();
    delete answer.USDT;
    this.setState({ exchangeRates: answer });
    getExchange(this.state);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="expense">
          Valor
          <input type="text" name="value" id="expense" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            type="text"
            name="currency"
            id="currency"
            onChange={ this.handleChange }
          >
            {currencies.map((value) => <option key={ value }>{value}</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select type="text" name="method" id="payment" onChange={ this.handleChange }>
            {
              payment.map((value) => <option key={ value }>{value}</option>)
            }
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select type="text" name="tag" id="tag" onChange={ this.handleChange }>
            {
              tags.map((tag) => <option key={ tag }>{tag}</option>)
            }
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" onClick={ this.handleExchanges }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: {
  currencies, expenses, totalExpense, itemPrice,
} }) => ({
  currencies,
  expenses,
  itemPrice,
  totalExpense,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrencyThunk()),
  getExchange: (state) => dispatch(addExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencies: PropTypes.array,
  getCurrencies: PropTypes.func,
  getExchange: PropTypes.func,
}.isRequired;
