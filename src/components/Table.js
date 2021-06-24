import React from 'react';
import { connect } from 'react-redux';
import { removeExpenses } from '../actions';
import Corpo from './Corpo';

class Table extends React.Component {
  funcaoTabela(cabecalho) {
    return (
      <table>
        <tr>
          {cabecalho.map((string, index) => (<th key={ index }>{string}</th>))}
        </tr>
        <Corpo />
      </table>
    );
  }

  render() {
    const cabecalho = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <>
        {this.funcaoTabela(cabecalho)}
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

export default connect(mapStateToProps, mapDispathToProps)(Table);
