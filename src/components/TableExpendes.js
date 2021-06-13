import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import trash from '../icons/trash.svg';
import { actionDeleteExpense } from '../actions/index';

class TableExpendes extends Component {
  constructor(props) {
    super(props);
    this.renderExpendes = this.renderExpendes.bind(this);
  }

  getNameCoinFormatted(coinsName) {
    const arraycoins = coinsName.split('/');

    if (arraycoins[0] === 'Dólar Americano') {
      return ['Dólar Comercial', 'Real'];
    }

    return [arraycoins[0], 'Real'];
  }

  formatNumeber(stringNumber, decimalPlaces) {
    return Number(stringNumber).toFixed(decimalPlaces);
  }

  convertValue(value, ask) {
    const valueConveted = value * ask;
    return this.formatNumeber(valueConveted, 2);
  }

  renderExpendes() {
    const { spend, deletExpense } = this.props;

    return (
      spend.map(({ description, tag, method, value, id, currency, exchangeRates }) => (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{this.getNameCoinFormatted(exchangeRates[currency].name)[0]}</td>
          <td>{this.formatNumeber(exchangeRates[currency].ask, 2)}</td>
          <td>{this.convertValue(value, exchangeRates[currency].ask)}</td>
          <td>{this.getNameCoinFormatted(exchangeRates[currency].name)[1]}</td>
          <td>
            <button
              type="button"
              data-testid="delete-btn"
              className="btn-delet"
              onClick={ () => deletExpense(id) }
            >
              <img src={ trash } alt="Delete" />
            </button>
          </td>
        </tr>))
    );
  }

  render() {
    return (
      <main className="table-expendes">
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
            {this.renderExpendes()}
          </tbody>
        </table>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  spend: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deletExpense: (id) => dispatch(actionDeleteExpense(id)),
});

TableExpendes.propTypes = {
  spend: PropTypes.arrayOf(Object).isRequired,
  deletExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableExpendes);
