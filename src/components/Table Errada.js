import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  funcaoTabela(cabecalho, linhas) {
    return (
      <table>
        <tr>
          {cabecalho.map((string, index) => (<th key={ index }>{string}</th>))}
        </tr>
        <tr>
          {linhas.map((expenses, index) => (<td key={ index }>{expenses.value}</td>))}
        </tr>
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

Table.propTypes = {
  getExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
