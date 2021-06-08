import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tableItems } from '../services/currencyData';
import { deletePayment, updatePayment } from '../actions/index';

class ExpensesTable extends Component {
  handleBtns(id) {
    const { deletePay, updatePay } = this.props;

    return (
      <div>
        <button
          data-testid="edit-btn"
          onClick={ () => updatePay(id, 'true') }
          type="button"
        >
          Edit
        </button>

        <button
          data-testid="delete-btn"
          onClick={ () => deletePay(id) }
          type="button"
        >
          delete
        </button>
      </div>
    );
  }

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        {expenses.length ? (
          <table>
            <thead className="header-table">
              <tr>
                {tableItems.map((item, index) => (
                  <th key={ index }>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp, index) => {
                const {
                  id,
                  description,
                  tag,
                  method,
                  value,
                  currency,
                  exchangeRates,
                } = exp;

                const exchange = +exchangeRates[currency].ask;
                return (
                  <tr role="row" key={ index }>
                    <td>{description}</td>
                    <td>{tag}</td>
                    <td>{method}</td>
                    <td>{value}</td>
                    <td>{exchangeRates[currency].name.split('/', 1)}</td>
                    <td>{exchange.toFixed(2)}</td>
                    <td>{(+value * exchange).toFixed(2)}</td>
                    <td>Real</td>
                    <td>{this.handleBtns(id)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          ''
        )}
      </div>
    );
  }
}

ExpensesTable.propTypes = {
  deletePay: PropTypes.func.isRequired,
  updatePay: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  bool: state.wallet.bool,
});

const mapDispatchToProps = (dispatch) => ({
  deletePay: (id) => dispatch(deletePayment(id)),
  updatePay: (id, bool) => dispatch(updatePayment(id, bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
