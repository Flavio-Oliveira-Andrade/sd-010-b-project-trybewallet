import React, { Component } from "react";
import { connect } from "react-redux";
import { number, arrayOf, shape } from "prop-types";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { expenses } = this.props;
    const headers = [
      "Descrição",
      "Tag",
      "Método de pagamento",
      "Valor",
      "Moeda",
      "Câmbio utilizado",
      "Valor convertido",
      "Moeda de conversão",
      "Editar/Excluir",
    ];
    return (
      <table>
        <tr>
          {headers.map((th) => (
            <th key={th}>{th}</th>
          ))}
        </tr>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>
              {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(
                2
              )}
            </td>
            <td>
              {parseFloat(
                expense.value * expense.exchangeRates[expense.currency].ask
              ).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button type="button">Editar</button>
              <button type="button">Excluir</button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

Table.propTypes = {
  expenses: arrayOf(shape({ id: number })),
}.isRequired;

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
