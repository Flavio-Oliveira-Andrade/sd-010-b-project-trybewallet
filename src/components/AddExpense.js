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
          <td>Descrição</td>
          <td>Tag</td>
          <td>Método de Pagamento</td>
          <td>Valor</td>
          <td>Moeda</td>
          <td>Câmbio Utilizado</td>
          <td>Valor Convertido</td>
          <td>Moeda de Conversão</td>
          <td>Editar/Excluir</td>
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
