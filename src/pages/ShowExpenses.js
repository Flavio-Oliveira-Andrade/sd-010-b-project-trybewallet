import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ShowExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.renderExpenseTable = this.renderExpenseTable.bind(this);
    this.renderExpenseData = this.renderExpenseData.bind(this);
  }

  renderExpenseData(expense) {
    const { exchangeRates } = expense;
    const { onClickDelete, onClickEdit } = this.props;
    const { ask, name } = Object.values(exchangeRates)
      .find((rate) => rate.code === expense.currency);
    const convertedValue = parseFloat(expense.value) * parseFloat(ask);
    return (
      <tr key={ expense.value + Math.sqrt(Math.random()) }>
        <td role="cell">{expense.description}</td>
        <td role="cell">{expense.tag}</td>
        <td role="cell">{expense.method}</td>
        <td role="cell">{expense.value}</td>
        <td role="cell">{name}</td>
        <td role="cell">{parseFloat(ask).toFixed(2)}</td>
        <td role="cell">{(convertedValue).toFixed(2)}</td>
        <td role="cell">Real</td>
        <td role="cell">
          <input
            onClick={ onClickDelete }
            id={ expense.id }
            data-testid="delete-btn"
            type="button"
            value="X"
          />
          <input
            onClick={ onClickEdit }
            id={ expense.id }
            data-testid="edit-btn"
            type="button"
            value="E"
          />
        </td>
      </tr>
    );
  }

  renderExpenseTable() {
    const { wallet } = this.props;
    const { expenses } = wallet;
    return (
      <table>
        <thead>
          <tr>
            <th>
              Descrição
            </th>
            <th>
              Tag
            </th>
            <th>
              Método de pagamento
            </th>
            <th>
              Valor
            </th>
            <th>
              Moeda
            </th>
            <th>
              Câmbio utilizado
            </th>
            <th>
              Valor convertido
            </th>
            <th>
              Moeda de conversão
            </th>
            <th>
              Editar/Excluir
            </th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense) => (
            this.renderExpenseData(expense)))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <section className="show-expense">
        { this.renderExpenseTable() }
      </section>
    );
  }
}
ShowExpenses.propTypes = {
  wallet: PropTypes.shape().isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(ShowExpenses);
