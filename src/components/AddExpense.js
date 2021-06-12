import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import '../styles/addExpense.css';

class AddExpense extends React.Component {
  render() {
    const { currencies, isFetching } = this.props;
    return (
      <form className="expense-form">
        <label htmlFor="valor">
          <span>Valor: </span>
          <input type="number" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          <span>Descrição: </span>
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          <span>Moeda: </span>
          <select name="moeda" id="moeda">
            { isFetching ? null : Object.keys(currencies).filter((cur) => cur !== 'USDT')
              .map((currency) => <option key={ currency }>{currency}</option>) }
          </select>
        </label>
        <label htmlFor="payment-metod">
          <span>Método de pagamento: </span>
          <select name="payment-metod" id="payment-metod">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <span>Tag: </span>
          <select className="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

AddExpense.propTypes = {
  currencies: PropTypes.object,
  isFetching: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps, null)(AddExpense);
