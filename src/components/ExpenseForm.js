import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

class ExpenseForm extends React.Component {
  componentDidMount() {
    const { getApiToCurrencies } = this.props;
    getApiToCurrencies();
  }

  render() {
    const { getCurrencies } = this.props;
    return (
      <form>
        <label htmlFor="amount">
          Valor
          <input name="amount" id="amount" type="number" />
        </label>
        <label htmlFor="description">
          Descrição
          <input name="description" id="description" type="text" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            <option>{' '}</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="dinheiro">Alimentação</option>
            <option value="credito">Lazer</option>
            <option value="debito">Trabalho</option>
            <option value="debito">Transporte</option>
            <option value="debito">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getApiToCurrencies: () => dispatch(fetchApi()),
});

const mapStateToProps = (state) => ({
  getCurrencies: state.wallet.currencies,
});

ExpenseForm.propTypes = {
  getApiToCurrencies: PropTypes.func.isRequired,
  getCurrencies: PropTypes.objectOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
