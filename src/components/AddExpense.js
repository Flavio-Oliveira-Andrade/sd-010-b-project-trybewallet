import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../AddExpense.css';

class AddExpense extends Component {
  render() {
    const { list } = this.props;

    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de Pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio Utilizado</th>
          <th>Valor Convertido</th>
          <th>Moeda de Conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        { list.map(({
          description,
          tag,
          method,
          value,
          currency,
          exchangeRates,
        },
        index) => (
          <tr key={ index }>
            <td>{ description }</td>
            <td>{ tag }</td>
            <td>{ method }</td>
            <td>{ Number(value).toFixed(2) }</td>
            <td>
              {
                currency === 'USD'
                  ? 'Dólar Comercial' : exchangeRates[currency].name.split('/', 1)
              }
            </td>
            <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
            <td>{ Number(value * exchangeRates[currency].ask).toFixed(2) }</td>
            <td>Real</td>
          </tr>
        )) }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.wallet.expenses,
});

AddExpense.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(AddExpense);
