import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses } from '../actions';

// Ajuda de Fernanda Porto com o map da linha 14 ao 27

class Table extends React.Component {
  funcaoTabela(cabecalho, linhas) {
    const { remove } = this.props;
    return (
      <table>
        <tr>
          {cabecalho.map((string, index) => (<th key={ index }>{string}</th>))}
        </tr>
        {linhas.map((expenses, index) => (
          <tr key={ expenses.id }>
            <td key={ index }>{expenses.description}</td>
            <td key={ index }>{expenses.tag}</td>
            <td key={ index }>{expenses.method}</td>
            <td key={ index }>{expenses.value}</td>
            <td key={ index }>{expenses.exchangeRates[expenses.currency].name}</td>
            <td key={ index }>
              {parseFloat(expenses.exchangeRates[expenses.currency].ask)
                .toFixed(2)}
            </td>
            <td key={ index }>
              {parseFloat(expenses.value * expenses.exchangeRates[expenses.currency].ask)
                .toFixed(2)}
            </td>
            <td key={ index }>Real</td>
            <td key={ index }>
              <button type="button">Editar</button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => remove(expenses) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }

  render() {
    const cabecalho = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { getExpenses } = this.props;
    return (
      <>
        {this.funcaoTabela(cabecalho, getExpenses)}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

const mapDispathToProps = (dispatch) => ({
  remove: (despesas) => dispatch(removeExpenses(despesas)),
});

Table.propTypes = {
  getExpenses: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(Table);
