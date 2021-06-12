import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions/index';

class FormExpenses extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
        <br />
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            {
              Object.keys(currencies).map((currency, index) => {
                const { code } = currencies[currency];
                return (<option key={ index }>{ code }</option>);
              })
            }
          </select>
        </label>
        <br />
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option selected>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="expense-category">
          Tag
          <select id="expense-category">
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

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
FormExpenses.propTypes = {
  /* code: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func().isRequired,
  currencies: PropTypes.shape().isRequired, */
};
export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
// export default FormExpenses;
