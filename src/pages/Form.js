import React from 'react';
import { connect } from 'react-redux';
import { actionThunkCoin, actionThunkExpenses, expenses } from  '../actions/walletActions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      value:'',
      description:'',
      method:'Dinheiro',
      currency:'USD',
      tag:'Alimentação',
      exchangeRates:{},
    }
    // this.setStateKeyCoins = this.setStateKeyCoins.bind(this)
  }


  handleChange = ({target}) => {
    const { value } = target
    this.setState({
      [target.name]:value,
    })
  }

  handleClick = async () => {
    const { exchange, expensesWithState, expenses } = this.props;
    await expensesWithState()
    this.setState({
      exchangeRates:exchange,
    })
    expenses(this.state);

  }

  componentDidMount() {
    const {actionCoins, expensesWithState } = this.props
    actionCoins()
    expensesWithState();
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
          <select id="moeda-input" name="currency" onChange={ this.handleChange } >
            {coins.map((coin) => {
              return (<option>{coin}</option>)
            })
            }
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select type="text" id="metodo" name="method" onChange={ this.handleChange } >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesas">
          Tag:
          <select id="despesas" name="tag" onChange={ this.handleChange } >
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
            onChange={this.handleChange} />
          </label>
        </label>
        <button type="button" onClick={this.handleClick} >Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionCoins: () => dispatch(actionThunkCoin()),
  expensesWithState : () => dispatch(actionThunkExpenses()),
  expenses:(state) => dispatch(expenses(state)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  coins: state.wallet.currencies,
  exchange:state.wallet.actualValue,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
