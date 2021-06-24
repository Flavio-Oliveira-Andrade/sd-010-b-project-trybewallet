import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const data = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;

    return (
      <table>
        <thead>
          { /* surge um erro no console e no react dev tools a informar
          que deve ser usado o thead/tbody na table para poder ter como child o tr. */ }
          <tr>
            { data.map((string, index) => (<th key={ index }>{ string }</th>)) }
          </tr>
        </thead>
        <tbody>
          { expenses.map((
            { description, tag, method, value, exchangeRates, currency }, index,
          ) => (
            <tr key={ index }>
              <td>
                { description }
              </td>
              <td>
                { tag }
              </td>
              <td>
                { method }
              </td>
              <td>
                { value }
              </td>
              <td>
                { exchangeRates[currency].name.split('/')[0] }
              </td>
              <td>
                { Number(exchangeRates[currency].ask).toFixed(2) }
              </td>
              <td>
                { Number(value * exchangeRates[currency].ask).toFixed(2) }
              </td>
              <td>
                Real
              </td>
              <td>
                Editar/Excluir
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.obj),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpensesTable);
