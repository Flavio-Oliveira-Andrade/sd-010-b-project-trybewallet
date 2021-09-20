import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  // constructor(prop) {
  //   super(prop);
  // }

  render() {
    const { expenses } = this.props;
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th> Descrição </th>
              <th> Tag </th>
              <th> Método de pagamento </th>
              <th> Valor </th>
              <th> Moeda </th>
              <th> Câmbio </th>
              <th> Câmbio utilizado </th>
              <th> Valor convertido </th>
              <th> Moeda de conversão </th>
              <th> Editar/Excluir </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.currency}</td>
                <td>
                  {Object.values(expense.exchangeRates).filter(
                    (currency) => ((currency.code === expense.currency)),
                  )[0].bid}
                </td>
                <td>
                  {Object.values(
                    expense.exchangeRates,
                  ).filter((currency) => ((currency.code === expense.currency)))[0].ask}
                </td>
                <td>
                  {(expense.value) * (Object.values(
                    expense.exchangeRates,
                  ).filter((currency) => ((currency.code === expense.currency)))[0].ask) }
                </td>
                <td>
                  {Object.values(
                    expense.exchangeRates,
                  ).filter((currency) => ((currency.code === expense.currency)))[0].name.split('/')[1]}
                </td>
                <td>
                  <button
                    onClick={ () => this.deleteExpense(expense.id) }
                    type="button"
                    className="button button-delete"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

// <tr>
//   {expenses.map((expense, index) => (
//     <td key={ index }>
//       { expense.description }
//       <td>{ expense.value }</td>
//       <td>{ expense.tag }</td>
//     </td>))}
// </tr>
//         </table>
//       </section>
//     );
//   }
// }

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
