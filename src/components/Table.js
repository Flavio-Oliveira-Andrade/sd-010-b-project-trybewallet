import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteItem } from '../actions';

class Table extends React.Component {
  constructor() {
    super();

    this.renderTableData = this.renderTableData.bind(this);
  }

  renderTableData() {
    const { expenses, deletarItem } = this.props;

    return expenses.map((expense) => {
      const { id, description, tag,
        method, value, currency, exchangeRates } = expense;

      const valorTotal = exchangeRates[currency].ask * value;

      return (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{exchangeRates[currency].name.split('/')[0]}</td>
          <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
          <td>{parseFloat(valorTotal).toFixed(2)}</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              className="button"
              data-testid="delete-btn"
              onClick={ () => { deletarItem(id); } }
            >
              Excluir
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
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
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deletarItem: (id) => dispatch(deleteItem(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletarItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
