import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenses } from '../actions';

class Corpo extends React.Component {
  render() {
    const { getExpenses, remove } = this.props;
    return (
      <>
        {getExpenses.map((expenses) => (
          <tr key={ expenses.id }>
            <td>{expenses.description}</td>
            <td>{expenses.tag}</td>
            <td>{expenses.method}</td>
            <td>{expenses.value}</td>
            <td>{expenses.exchangeRates[expenses.currency].name}</td>
            <td>
              {parseFloat(expenses.exchangeRates[expenses.currency].ask)
                .toFixed(2)}
            </td>
            <td>
              {parseFloat(expenses.value * expenses.exchangeRates[expenses.currency].ask)
                .toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button type="button">Editar</button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => remove(expenses) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

const mapDispathToProps = (dispatch) => ({
  remove: (despesas) => dispatch(removeExpenses(despesas)),
});

Corpo.propTypes = {
  getExpenses: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(Corpo);
