import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionThunkCoin, actionThunkExpenses, expenses } from '../actions/walletActions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      method: 'Dinheiro',
      currency: 'USD',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { actionCoins } = this.props;
    actionCoins();
  }

  async handleClick() {
    const { exchange, expensesWithState } = this.props;
    // para de dar problema!!!
    console.log(this.state);
    // para de dar problema!!!
    await expensesWithState();
    const { id } = this.state;
    this.setState({
      id: id + 1,
      exchangeRates: exchange,
    });
    const stateOfComponent = this.state;
    expenses(stateOfComponent);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const { coins } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            id="valor"
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda-input">
          Moeda
          <select id="moeda-input" name="currency" onChange={ this.handleChange }>
            {coins.map((coin, index) => (<option key={ index }>{coin}</option>))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select type="text" id="metodo" name="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesas">
          Tag:
          <select id="despesas" name="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <label htmlFor="descricao">
            Descrição:
            <input
              type="text"
              id="descricao"
              name="description"
              onChange={ this.handleChange }
            />
          </label>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionCoins: () => dispatch(actionThunkCoin()),
  expensesWithState: () => dispatch(actionThunkExpenses()),
  expenses: (state) => dispatch(expenses(state)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  coins: state.wallet.currencies,
  exchange: state.wallet.actualValue,
});

Form.propTypes = {
  actionCoins: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
