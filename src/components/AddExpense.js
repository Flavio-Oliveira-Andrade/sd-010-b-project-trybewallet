import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../AddExpense.css';
import { deleteItem } from '../actions/index';
import HeaderList from './HeaderList';

class AddExpense extends Component {
  render() {
    const { list, toDelete } = this.props;
    return (
      <table>
        <HeaderList />
        <tbody>
          { list.map((d, idx) => (
            <tr key={ idx }>
              <td role="cell">{ d.description }</td>
              <td role="cell">{ d.tag }</td>
              <td role="cell">{ d.method }</td>
              <td role="cell">{ d.value }</td>
              <td role="cell">
                {
                  d.currency === 'USD'
                    ? 'Dólar Comercial'
                    : d.exchangeRates[d.currency].name.split('/', 1)
                }
              </td>
              <td role="cell">{ Number(d.exchangeRates[d.currency].ask).toFixed(2) }</td>
              <td role="cell">
                { Number(d.value * d.exchangeRates[d.currency].ask).toFixed(2) }
              </td>
              <td role="cell">Real</td>
              <button type="button">
                <img
                  src="https://icon-library.com/images/icon-edit-png/icon-edit-png-0.jpg"
                  height="20px"
                  alt="Edit button"
                />
              </button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => toDelete(d.id) }
              >
                <img
                  src="https://icon-library.com/images/trash-icon/trash-icon-16.jpg"
                  height="20px"
                  alt="Delete button"
                />
              </button>
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

const mapDispatchToProps = (dispatch) => ({
  toDelete: (id) => dispatch(deleteItem(id)),
});

AddExpense.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  toDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
