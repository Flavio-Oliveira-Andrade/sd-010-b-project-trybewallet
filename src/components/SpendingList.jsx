import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResult, expenseAction } from '../actions';

class SpendingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      cost: '',
      currencyUsed: '',
      paymentMethod: '',
      tag: '',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePaymentAndTag = this.handlePaymentAndTag.bind(this);
  }

  componentDidMount() {
    const { secondDispatch } = this.props;
    secondDispatch();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { secondDispatch, currencies, thirdDispatch } = this.props;
    secondDispatch();
    delete currencies.USDT;
    this.setState({ exchangeRates: currencies }, () => { thirdDispatch(this.state); });
    this.setState((previousState) => ({ id: previousState.id + 1 }));
  }

  handlePaymentAndTag() {
    const { tag, paymentMethod } = this.state;
    return (
      <div>
        <label htmlFor="paymentMethod">
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={ paymentMethod }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
          Método de pagamento
        </label>
        <label htmlFor="tag">
          <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Trabalho">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
          Tag
        </label>
      </div>
    );
  }

  render() {
    const { currencies } = this.props;
    const { cost, currencyUsed, description } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="cost">
            <input
              id="cost"
              name="cost"
              type="text"
              value={ cost }
              onChange={ this.handleChange }
            />
            Valor
          </label>
          <label htmlFor="description">
            <input
              id="description"
              name="description"
              value={ description }
              type="text"
              onChange={ this.handleChange }
            />
            Descrição
          </label>
          <label htmlFor="currencyUsed">
            Moeda
            <select
              id="currencyUsed"
              name="currencyUsed"
              value={ currencyUsed }
              onChange={ this.handleChange }
            >
              {Object.keys(currencies).map((currency) => (
                <option key={ currency }>
                  {currency}
                </option>
              )) }
            </select>
          </label>
          {this.handlePaymentAndTag()}
          <button type="button" onChange={ this.handleClick }>
            Adicionar Despesas
          </button>
        </form>
      </div>
    );
  }
}

SpendingList.propTypes = ({
  currencies: PropTypes.arrayOf.isRequired,
  secondDispatch: PropTypes.func.isRequired,
  thirdDispatch: PropTypes.func.isRequired,
});

const mapDispatchToProps = (dispatch) => ({
  secondDispatch: () => dispatch(getResult()),
  thirdDispatch: (spendingItems) => dispatch(
    expenseAction(spendingItems),
  ),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  email: state.user.email,
});
// A colega Camila tirou uma dúvida no slack sobre o exercício 8, que eu tirei como base para realizar o map e também verifiquei seu repositório para verificar como realizar o handleClick e expense do header.
export default connect(mapStateToProps, mapDispatchToProps)(SpendingList);
