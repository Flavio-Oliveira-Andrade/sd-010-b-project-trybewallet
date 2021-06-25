import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { dell } from '../actions';

class Table extends React.Component {
  // constructor() {
  //   super();

  //   this.dispatchDelete = this.dispatchDelete.bind(this);
  // }

  // dispatchDelete(id) {

  // }

  render() {
    const { expenses } = this.props;
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
          { expenses.map((e, index) => (
            <tr key={ index }>
              <td>{e.description}</td>
              <td>{e.tag}</td>
              <td>{e.method}</td>
              <td>{e.value}</td>
              <td>{e.exchangeRates[e.currency].name.split('/')[0]}</td>
              <td>
                {parseFloat(e.exchangeRates[e.currency].ask).toFixed(2)}
              </td>
              <td>
                {parseFloat(e.value
                  * e.exchangeRates[e.currency].ask).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  // onClick={ }
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  // dispatchDelete: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

// const mapDispatchToProps = (dispatch) => ({
//   // dispatchDelete: (id) => dispatch(
//   //  dell(id),
//   // ),
// });
export default connect(mapStateToProps, null)(Table);
