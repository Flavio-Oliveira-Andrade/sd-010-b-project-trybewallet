import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import expensesMapFunc from '../services/expensesMapFunc';

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;
    let tabela;
    if (expenses.length) {
      tabela = expenses.map((expense) => expensesMapFunc(expense));
    }

    return (
      <table>
        <thead>
          <tr>
            <th>
              Descrição
            </th>
            <th>
              Tag
            </th>
            <th>
              Método de pagamento
            </th>
            <th>
              Valor
            </th>
            <th>
              Moeda
            </th>
            <th>
              Câmbio utilizado
            </th>
            <th>
              Valor convertido
            </th>
            <th>
              Moeda de conversão
            </th>
            <th>
              Editar/Excluir
            </th>
          </tr>
        </thead>
        <tbody>
          { tabela || null }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  const { wallet: { expenses } } = state;
  return {
    expenses,
  };
};

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpensesTable);
