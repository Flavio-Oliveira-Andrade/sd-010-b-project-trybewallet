import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';
import { delExpense, toEdit } from '../actions';

class Table extends Component {
  constructor() {
    super();
    this.tableHead = this.tableHead.bind(this);
    this.tableBody = this.tableBody.bind(this);
  }

  tableHead() {
    const head = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <thead>
        <tr>
          { head.map((item, i) => <th key={ i }>{item}</th>)}
        </tr>
      </thead>
    );
  }

  tableBody() {
    const { expenses, propDelExpense, propToEdit } = this.props;
    return (
      <tbody>
        { expenses
          .map(({
            id, description, tag, method, value, currency, exchangeRates,
          }, index) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => propToEdit(true, expenses[index]) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => propDelExpense(id) }
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    );
  }

  render() {
    return (
      <table>
        { this.tableHead() }
        { this.tableBody() }
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  propDelExpense: (data) => dispatch(delExpense(data)),
  propToEdit: (status, editingData) => dispatch(toEdit(status, editingData)),
});

Table.propTypes = {
  expenses: arrayOf(object),
}.isRequired;

export default connect(null, mapDispatchToProps)(Table);
