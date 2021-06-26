import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWalletSpend } from '../actions';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);

    this.coin = this.coin.bind(this);
    this.handleSpendAdded = this.handleSpendAdded.bind(this);
  }
 
 // component
  spend(handleClick, state) {
    return (
      <label htmlFor="spent">
        Valor:
        <input type="number" id="spent" value={ state } onChange={ handleClick } />
      </label>
    );
  }
 // component
  coin(handleClick, state, coins) {
    return (
      <label htmlFor="coin">
        moeda:
        <select type="text" id="coin" onChange={ handleClick } value={ state }>
          {coins.map(({ code }, i) => (
            <option key={ i } value={ code }>{code}</option>
          ))}
        </select>
      </label>
    );
  }
  // component
  paymentMethod(handleClick, state) {
    return (
      <label htmlFor="paymentMethod">
        Método de Pagamento:
        <select
          type="text"
          id="paymentMethod"
          onChange={ handleClick }
          value={ state }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
  // component
  tag(handleClick, state) {
    return (
      <label htmlFor="tag">
        Tag:
        <select type="text" id="tag" onChange={ handleClick } value={ state }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
  // component
  description(handleClick, state) {
    return (
      <label htmlFor="description">
        Descrição:
        <input type="" id="description" onChange={ handleClick } value={ state } />
      </label>
    );
  }
  // component
  handleSpendAdded() {
    const { coin, spent, paymentMethod, tag, description } = this.props.states;
    const { addSpend, qtdSpended } = this.props;

    return (
      <button
        type="button"
        onClick={ () => addSpend({
          id: qtdSpended,
          value: spent,
          method: paymentMethod,
          currency: coin,
          description,
          tag,
        }) }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { coins, coin, spent, paymentMethod, tag, description } = this.props.states;
    const { handleClick } = this.props; 
    return (
      <form>
        {this.spend(handleClick, spent)}
        {this.coin(handleClick, coin, coins)}
        {this.paymentMethod(handleClick, paymentMethod)}
        {this.tag(handleClick, tag)}
        {this.description(handleClick, description)}
        {this.handleSpendAdded()}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSpend: (spend) => dispatch(fetchWalletSpend(spend)),
});

const mapStateToProps = (state) => ({
  qtdSpended: state.wallet.expenses.length,
});

AddExpense.propTypes = {
  addSpend: PropTypes.func.isRequired,
  qtdSpended: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
