import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpense } from '../actions';

class Table extends React.Component {
  getCurrentExpanseValues(expense) {
    const { value, currency, exchangeRates } = expense;
    const name = exchangeRates[currency].name.split('/')[0];
    return {
      convertedValue: value * exchangeRates[currency].ask,
      exchangeValue: exchangeRates[currency].ask,
      currencyName: name,
    };
  }

  ConvertIntToFloat(number) {
    const realNumber = parseFloat(number);
    return (
      Math.round((realNumber + Number.EPSILON) * 100) / 100
    ).toFixed(2);
  }

  handleDelete(idToDelete) {
    const { expenses, deleteExpense } = this.props;
    const indexOfElement = expenses.findIndex(({ id }) => id === idToDelete);
    deleteExpense(indexOfElement);
  }

  renderTableBody() {
    const { expenses } = this.props;
    return expenses.map((expense, index) => {
      const { description, tag, method, value, id } = expense;
      const {
        convertedValue,
        exchangeValue,
        currencyName,
      } = this.getCurrentExpanseValues(expense);
      return (
        <tr key={ index }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{currencyName}</td>
          <td>{this.ConvertIntToFloat(exchangeValue)}</td>
          <td>{this.ConvertIntToFloat(convertedValue)}</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => this.handleDelete(id) }
            >
              Deletar
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
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
          {this.renderTableBody()}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      ask: PropTypes.string,
    }),
  })),
  deleteExpense: PropTypes.func.isRequired,
};

Table.defaultProps = {
  expenses: {
    id: 1,
    value: '555',
    description: 'faltou',
    currency: 'faltou',
    method: 'faltou',
    tag: 'faltou',
    exchangeRates:
      {
        code: 'USD',
        name: 'Dólar Comercial',
        ask: '5.6208',
      },

  },
};

const mapStateToProps = ({ user, wallet }) => ({
  expenses: wallet.expenses,
  email: user.email,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(delExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
