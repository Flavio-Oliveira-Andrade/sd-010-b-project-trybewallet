import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { action } from '../actions';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.removeExpense = this.removeExpense.bind(this);
    this.tableHeader = this.tableHeader.bind(this);

    this.state = {};
  }

  removeExpense(event) {
    event.preventDefault();
    const id = event.target.value;
    const { myDispatch } = this.props;
    myDispatch({
      type: 'REMOVE_EXPENSE',
      payload: id,
    });
  }

  tableHeader() {
    return (
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
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tbody>
          {this.tableHeader()}
          {expenses.map((entry, index) => (
            <tr key={ index }>
              <td>{entry.description}</td>
              <td>{entry.tag}</td>
              <td>{entry.method}</td>
              <td>{entry.value}</td>
              <td>{entry.exchangeRates[entry.currency].name.split('/')[0]}</td>
              <td>{parseFloat(entry.exchangeRates[entry.currency].ask).toFixed(2)}</td>
              <td>
                {parseFloat(entry.value
                  * entry.exchangeRates[entry.currency].ask).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  value={ entry.id }
                  onClick={ this.removeExpense }
                >
                  Excluir
                </button>
                <button
                  type="button"
                  data-testid="edit-btn"
                  value={ entry.id }
                >
                  Editar
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
  myDispatch: (state) => dispatch(action(state)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  myDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
