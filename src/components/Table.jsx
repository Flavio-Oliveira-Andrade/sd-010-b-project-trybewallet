import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';

class Table extends Component {
  constructor() {
    super();
    this.tableHead = this.tableHead.bind(this);
    this.tableBody = this.tableBody.bind(this);
  }

  tableHead() {
    const head = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <thead>
        <tr>
          { head.map((item, i) => <th key={ i }>{item}</th>)}
        </tr>
      </thead>
    );
  }

  tableBody() {
    const { expenses } = this.props;
    return (
      <tbody>
        { expenses
          .map(({ id, description, tag, method, value, currency, exchangeRates }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
              <td>Real</td>
            </tr>
          ))}
      </tbody>
    );
  }

  render() {
    return (
      <table>
        { this.tableHead() }
        { this.tableBody() }
      </table>
    );
  }
}

Table.propTypes = {
  expenses: arrayOf(object),
}.isRequired;

export default Table;
