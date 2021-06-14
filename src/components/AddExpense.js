import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../AddExpense.css';

class AddExpense extends Component {
  render() {
    const { list } = this.props;

    return (
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
              <td role="cell">{ description }</td>
              <td role="cell">{ tag }</td>
              <td role="cell">{ method }</td>
              <td role="cell">{ Number(value).toFixed(2) }</td>
              <td role="cell">
                {
                  currency === 'USD'
                    ? 'Dólar Comercial' : exchangeRates[currency].name.split('/', 1)
                }
              </td>
              <td role="cell">{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
              <td role="cell">
                { Number(value * exchangeRates[currency].ask).toFixed(2) }
              </td>
              <td role="cell">Real</td>
            </tr>
          )) }
        </tbody>
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
