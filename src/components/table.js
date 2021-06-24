import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class Table extends Component {
  constructor() {
    super();
    this.buttons = this.buttons.bind(this);
  }

  buttons(id) {
    const { deletarDespesas } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ () => deletarDespesas(id) }
      >
        Deletar
      </button>
    );
  }

  render() {
    const { expenses } = this.props;
    const descriptions = ['Descrição', 'Tag', 'Método de pagamento',
      'Valor', 'Moeda', 'Câmbio utilizado', 'Valor convertido',
      'Moeda de conversão', 'Editar/Excluir'];
    return (
      <div>
        <table>
          <thead>
            <tr>
              { descriptions.map((value) => <th key={ value }>{ value }</th>) }
            </tr>
          </thead>
          <tbody>
            {
              expenses.map((expense) => {
                const { description, tag, method,
                  value, currency, exchangeRates, id } = expense;
                const { name, ask } = exchangeRates[currency];
                return (
                  <tr key={ id }>
                    <td>{ description }</td>
                    <td>{ tag }</td>
                    <td>{ method }</td>
                    <td>{ value }</td>
                    <td>{ name }</td>
                    <td>{ (Number(ask)).toFixed(2) }</td>
                    <td>{ (Number(ask) * Number(value)).toFixed(2) }</td>
                    <td>Real</td>
                    <td>{ this.buttons(id) }</td>
                  </tr>
                );
              })
            }
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
  deletarDespesas: (id) => dispatch(deleteExpense(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf({}),
  deleteExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
