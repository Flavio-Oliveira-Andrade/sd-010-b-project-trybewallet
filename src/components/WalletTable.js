import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions/index';

class WalletTable extends React.Component {
  constructor() {
    super();
    this.tableMaker = this.tableMaker.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
  }

  removeExpense({ target: { name } }) {
    const { data } = this.props;
    data(name);
  }

  tableMaker() {
    const { expenses } = this.props;
    return (
      <>
        {
          expenses.map((item, index) => (
            <tr key={ index }>
              <td>{item.description}</td>
              <td>{item.tag}</td>
              <td>{item.method}</td>
              <td>{item.value}</td>
              <td>{item.exchangeRates[item.currency].name.split('/')[0]}</td>
              <td>{parseFloat(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
              <td>
                {parseFloat(item.value * item.exchangeRates[item.currency].ask)
                  .toFixed(2) }
              </td>
              <td>Real</td>
              <button
                onClick={ this.removeExpense }
                data-testid="delete-btn"
                name={ item.id }
                type="submit"
              >
                Remover
              </button>
            </tr>
          ))
        }
      </>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <section>
        <table>
          <tbody>
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
            {
              expenses.length > 0 && this.tableMaker()
            }
          </tbody>
        </table>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  data: (id) => dispatch(removeExpense(id)),
});
WalletTable.propTypes = {
  data: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired };
export default connect(null, mapDispatchToProps)(WalletTable);
