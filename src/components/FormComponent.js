import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi, fetchExpenses } from '../actions/index';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentação',
      description: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputCurrency = this.inputCurrency.bind(this);
  }

  componentDidMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  handleClick() {
    const { fetchCoins, expense, currencies } = this.props;
    delete currencies.USDT;
    fetchCoins();
    this.setState({ exchangeRates: currencies }, () => expense(this.state));
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  inputCurrency() {
    const { currencies } = this.props;
    const arrayCurrencies = Object.keys(currencies);
    return (
      arrayCurrencies.map((currencie) => ((currencie !== 'USDT')
        ? <option>{currencie}</option>
        : null))
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="valor-input">
          Valor
          <input id="valor-input" type="number" onChange={ this.handleChange } />
        </label>
        <label htmlFor="despesa-input">
          Descrição
          <input id="despesa-input" type="text" onChange={ this.handleChange } />
        </label>
        <label htmlFor="moeda-select">
          Moeda
          <select id="moeda-select" name="currency" onChange={ this.handleChange }>
            {this.inputCurrency()}
          </select>
        </label>
        <label htmlFor="metodo-select">
          Método de pagamento
          <select id="metodo-select" onChange={ this.handleChange }>
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-select">
          Tag
          <select id="tag-select">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

FormComponent.propTypes = {
  fetchCoins: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf.isRequired,
  expense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(fetchApi()),
  expense: (e) => dispatch(fetchExpenses(e)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
