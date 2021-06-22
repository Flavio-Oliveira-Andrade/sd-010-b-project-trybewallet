import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurrence, fetchApi } from '../services/fetchApi';
import { saveCurrenciesAction, saveExpenses } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleExpenses = this.handleExpenses.bind(this);
  }

  componentDidMount() {
    const { updateCurrencies } = this.props;
    updateCurrencies(fetchApiCurrence());
  }

  handleInput({ target }) {
    this.setState({ [target.id]: target.value });
  }

  async handleExpenses() {
    const { updateExpenses } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const data = await fetchApi();
    this.setState((state) => ({ id: state.id + 1 }));
    updateExpenses({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: data,
    });
  }

  render() {
    const { currencie } = this.props;
    const { currency, tag, method, description, value } = this.state; 
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input value={ value } type="number" id="value" onChange={ this.handleInput } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input value={ description } type="text" id="description" onChange={ this.handleInput } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select value={ currency } data-testid="currency-input" onChange={ this.handleInput } id="currency">
            {currencie.map((currence, index) => (
              <option value={ currence } data-testid={ currence } key={ `Currence ${index}` }>{currence}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select value={ method } onChange={ this.handleInput } id="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select value={ tag } onChange={ this.handleInput } id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button onClick={ this.handleExpenses } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCurrencies: (data) => dispatch(saveCurrenciesAction(data)),
  updateExpenses: (values) => dispatch(saveExpenses(values)),
});

const mapStateToProps = (state) => ({
  currencie: state.wallet.currencies,
});

Form.propTypes = {
  updateCurrencies: PropTypes.func.isRequired,
  currencie: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
