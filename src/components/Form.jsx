import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoin, receiveExpense } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { saveCoin } = this.props;
    saveCoin();
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { coinName, saveExpense } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" onChange={ this.handleChange } />
        </label>

        <label htmlFor="description">
          Descrição
          <input type="text" id="description" onChange={ this.handleChange } />
        </label>

        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            { coinName.map((coin) => <option value={ coin } key={ coin }>{coin}</option>)}
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ () => saveExpense((this.state)) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  saveCoin: PropTypes.func.isRequired,
  coinName: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coinName: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCoin: () => dispatch(fetchCoin()),
  saveExpense: (expense) => dispatch(receiveExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
