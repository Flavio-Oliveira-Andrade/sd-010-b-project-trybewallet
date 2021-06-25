import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveOnlyExpenses } from '../actions/walletActions';

class Table extends Component {
  handleClickDelete(id) {
    const { tableHandleClickDelete } = this.props;
    const { getExpenses } = this.props;
    const newArray = getExpenses.filter((expense) => expense.id !== id);
    tableHandleClickDelete(newArray);
  }

  render() {
    const { getExpenses } = this.props;
    return (
      <div>
        <table>
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
          {
            getExpenses.map((expense, key) => (
              <tr key={ key }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
                <td>
                  {(+expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)}
                </td>
                <td>
                  {(+expense.exchangeRates[expense.currency].ask * expense.value)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    onClick={ () => this.handleClickDelete(expense.id) }
                    data-testid="delete-btn"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))

          }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

const mapDispathToProps = (dispatch) => ({
  tableHandleClickDelete: (id) => dispatch(saveOnlyExpenses(id)),
});

Table.propTypes = {
  getExpenses: PropTypes.string.isRequired,
  tableHandleClickDelete: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(Table);
