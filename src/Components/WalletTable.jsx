import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';

class WalletTable extends Component {
  constructor(props) {
    super(props);
    this.removingExpenses = this.removingExpenses.bind(this);
  }

  returnCurrencyName({ currency, exchangeRates }) {
    if (currency === 'USD') return 'Dólar Comercial';
    const realName = exchangeRates[currency].name.replace('/Real Brasileiro', '');
    return realName;
  }

  removingExpenses({ target }) {
    const { dispatchRemoveExpense } = this.props;
    const { id } = target;
    console.log(id);
    dispatchRemoveExpense({ id });
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
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
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{this.returnCurrencyName(expense)}</td>
                <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
                <td>
                  {(Number(expense.value)
              * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button
                    data-testid="delete-btn"
                    id={ expense.id }
                    type="button"
                    onClick={ this.removingExpenses }
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRemoveExpense: (state) => dispatch(removeExpense(state)),
});

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchRemoveExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
