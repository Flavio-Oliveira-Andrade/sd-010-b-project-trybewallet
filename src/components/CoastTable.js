import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpense } from '../actions';

class CoastTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const { delExpenses, allExpenses } = this.props;
    const newArray = allExpenses.filter((expense) => expense.id !== id);
    console.log(newArray);
    delExpenses(newArray);
  }

  render() {
    const { allExpenses } = this.props;
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
          {allExpenses.map((expense, idx) => (
            <tr key={ idx }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
              <td>
                {(+expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>
                {(+expense.value * expense.exchangeRates[expense.currency].ask)
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleDelete(expense.id) }
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

const mapDispatchToProps = (dispatch) => ({
  delExpenses: (deleteExpense) => dispatch(delExpense(deleteExpense)),
});

const mapStateToProps = (state) => ({
  allExpenses: state.wallet.expenses,
});

CoastTable.propTypes = {
  allExpenses: PropTypes.arrayOf.isRequired,
  delExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoastTable);
