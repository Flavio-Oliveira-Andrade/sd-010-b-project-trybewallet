import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTable extends React.Component {
  convertValue(value, exchangeRates) {
    const convertedValue = value * exchangeRates;
    return parseFloat(convertedValue.toFixed(2));
  }

  renderTable() {
    const { expenses } = this.props;
    const tableLine = expenses.map((expense, index) => {
      const { description, tag, method, value, currency,
        exchangeRates: { [currency]: { name, ask } } } = expense;

      return (
        <tr key={ index }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{name.replace('/Real', '')}</td>
          <td>{this.convertValue(1, ask)}</td>
          <td>
            {
              this.convertValue(value, ask)
            }
          </td>
          <td>Real</td>
        </tr>
      );
    });

    return tableLine;
  }

  render() {
    return (
      <section>
        <table>
          <thead>
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
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps, null)(ExpensesTable);
