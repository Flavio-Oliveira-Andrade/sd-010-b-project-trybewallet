import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number, arrayOf, shape, func } from 'prop-types';
import { deleteExpense } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  buttons(id) {
    return (
      <td>
        <button
          type="button"
        >
          Editar
        </button>
        <button
          type="button"
          data-testid="delete-btn"
          name={ id }
          onClick={ this.handleDelete }
        >
          Excluir
        </button>
      </td>
    );
  }

  handleDelete({ target: { name } }) {
    const { propDeleteExpense } = this.props;
    propDeleteExpense(name);
  }

  render() {
    const { expenses } = this.props;
    const headers = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];
    return (
      <table>
        <thead>
          <tr>
            { headers.map((th) => (
              <th key={ th }>{ th }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { expenses.map((exp) => (
            <tr key={ exp.id }>
              <td>{ exp.description }</td>
              <td>{ exp.tag }</td>
              <td>{ exp.method }</td>
              <td>{ exp.value }</td>
              <td>{ exp.exchangeRates[exp.currency].name }</td>
              <td>{ parseFloat(exp.exchangeRates[exp.currency].ask).toFixed(2) }</td>
              <td>
                { parseFloat(
                  exp.value * exp.exchangeRates[exp.currency].ask,
                ).toFixed(2) }
              </td>
              <td>Real</td>
              {this.buttons(exp.id)}
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: arrayOf(shape({ id: number })),
  total: number,
  propDeleteExpense: func,
}.isRequired;

const mapStateToProps = ({ wallet: { expenses, total } }) => ({
  expenses,
  total,
});

const mapDispatchToProps = (dispatch) => ({
  propDeleteExpense: (id) => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
