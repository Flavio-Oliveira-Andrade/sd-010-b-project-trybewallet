import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  constructor() {
    super();
    this.cotationTable = this.cotationTable.bind(this);
  }

  cotationTable() {
    const { expenses } = this.props;
    return (
      <tbody>
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.currency}</td>
            <td>
              { Object.values(expense.exchangeRates).filter(
                (currency) => ((currency.code === expense.currency)),
              )[0].bid}
            </td>
            <td>
              {console.log(expense.exchangeRates)}
              { Object.values(expense.exchangeRates).filter(
                (currency) => ((currency.code === expense.currency)),
              )[0].ask}
            </td>
            <td>
              {expense.value * Object.values(expense.exchangeRates).filter(
                (currency) => ((currency.code === expense.currency)),
              )[0].ask }
            </td>
            <td>
              { Object.values(expense.exchangeRates).filter(
                (currency) => ((currency.code === expense.currency)),
              )[0].name.split('/')[1]}
            </td>
            <td>{}</td>
          </tr>
        ))}
      </tbody>);
  }

  render() {
    // const { expenses } = this.props;
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
          { this.cotationTable() }
        </table>
      </section>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
