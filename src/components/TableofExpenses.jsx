import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableOfExpenses extends React.Component {
  constructor() {
    super();
    this.renderExpenses = this.renderExpenses.bind(this);
  }

  renderExpenses() {
    const { expenses } = this.props;
    const allExpenses = expenses.map((expense) => {
      const { value, description, exchangeRates, currency,
        method, tag, id } = expense;
      const exchangeRate = (parseFloat(exchangeRates[currency].ask)).toFixed(2);
      return (
      <tr key={ id }>
        <td name={ description }>{ description }</td>
        <td name={ tag }>{ tag }</td>
        <td name={ method }>{ method }</td>
        <td name={ value }>{ value }</td>
        <td>{ exchangeRates[currency].name.split("/")[0] }</td>
        <td name={ exchangeRate }>{ exchangeRate }</td>
        <td>
          {(parseFloat(value.replace(',', '.') * exchangeRates[currency].ask)).toFixed(2)}
        </td>
        <td>Real</td>
      </tr>
    )});
    return allExpenses;
  }

  render(){
    return (
      <table>
        <tbody>
          <tr>
            <th name="Descrição">Descrição</th>
            <th name="Tag">Tag</th>
            <th name="Método de pagamento">Método de pagamento</th>
            <th name="Valor">Valor</th>
            <th name="Moeda">Moeda</th>
            <th name="Câmbio utilizado">Câmbio utilizado</th>
            <th name="Valor convertido">Valor convertido</th>
            <th name="Moeda de conversão">Moeda de conversão</th>
            <th name="Editar/Excluir">Editar/Excluir</th>
          </tr>
          {this.renderExpenses()}
        </tbody>
      </table>
    );
  };
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses
})

TableOfExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default connect(mapStateToProps)(TableOfExpenses);
