import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionThunkCoin, actionThunkExpenses, expenses } from '../actions/walletActions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      method: 'Dinheiro',
      currency: 'USD',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // preciso de uma callback no estrado
  async componentDidMount() {
    const { actionCoins } = this.props;
    actionCoins();
    // 1 chamanda component didmout!
    // const { payload } = await expensesWithState();
    // this.setState({
    //   exchangeRates: payload,
    // });
  }

  async handleClick() {
    // falta APENAS ISSO!! VERIFICAR NO PLANTAO!!
    const { exchange,
      expensesWithState,
    } = this.props;
    // 2º chama pra enviar para o actionvalue! ajustar
    // estado
    await expensesWithState(this.state);
    const { id } = this.state;
    this.setState({
      id: (id + 1),
      exchangeRates: exchange,
    });
    // enviar o estado para o estado!
    // expensesToState(this.state);
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
  expensesWithState: (expense) => dispatch(actionThunkExpenses(expense)),
  expensesToState: (state) => dispatch(expenses(state)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  coins: state.wallet.currencies,
  exchange: state.wallet.actualValue,
  arrayOfExpenses: state.wallet.expenses,
});

Form.propTypes = {
  actionCoins: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
