import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dellExpense } from '../actions'

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.dell = this.dell.bind(this);
  }

  dell(index) {
    const { expenses, dellExpense: apagar } = this.props;
    const arrExpenses = [...expenses];
    arrExpenses.splice(index, 1);
    apagar(arrExpenses);
  }

  render() {
    const { expenses } = this.props;
    return (
      // Relembrar tabelas em html https://www.homehost.com.br/blog/criar-sites/tabela-html/
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
        {expenses.map((element, index) => (
          <tr key={ index }>
            <td>{element.description}</td>
            <td>{element.tag}</td>
            <td>{element.method}</td>
            <td>{element.value}</td>
            <td>{element.exchangeRates[element.currency].name.split('/')[0]}</td>
            <td>{parseFloat(element.exchangeRates[element.currency].ask).toFixed(2)}</td>
            <td>
              {parseFloat(element.value
                * element.exchangeRates[element.currency].ask).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => this.dell(index) }
              >
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dellExpense: (deleteExpense) => dispatch(dellExpense(deleteExpense)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  dellExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
