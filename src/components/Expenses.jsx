import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { delExpense } from '../actions/walletActions';

class Expenses extends React.Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete(index) {
    const { expenses, delExpense: teste } = this.props;
    const allExpenses = [...expenses];
    allExpenses.splice(index, 1);
    teste(allExpenses);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="container-table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((element, index) => (
            <tr key={ index }>
              <td>{element.description}</td>
              <td>{element.tag}</td>
              <td>{element.method}</td>
              <td>{element.value}</td>
              <td>{element.exchangeRates[element.currency].name.split('/')[0]}</td>
              <td>
                {parseFloat(element.exchangeRates[element.currency].ask).toFixed(2)}
              </td>
              <td>
                {parseFloat(element.value
                  * element.exchangeRates[element.currency].ask).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.delete(index) }
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (Expense) => dispatch(delExpense(Expense)),
});

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  delExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
