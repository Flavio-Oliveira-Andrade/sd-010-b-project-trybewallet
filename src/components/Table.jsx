import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencyThunk } from '../actions/currencyActions';

class Table extends React.Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="text" name="name" id="expense" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="name" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select type="text" name="name" id="currency">
            {currencies.map((currency) => <option key={ currency }>{currency}</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select type="text" name="name" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select type="text" name="name" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(getCurrencyThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  getCurrency: PropTypes.func,
  currencies: PropTypes.array,
}.isRequired;
