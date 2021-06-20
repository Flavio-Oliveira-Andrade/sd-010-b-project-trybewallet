import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import { saveCurrenciesAction } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { updateCurrencies } = this.props;
    updateCurrencies(fetchApi());
  }

  render() {
    const { currencie } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select id="coin">
            {currencie.map((value, index) => (
              <option key={ index }>{value}</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
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
  updateCurrencies: (data) => dispatch(saveCurrenciesAction(data)),
});

const mapStateToProps = (state) => ({
  currencie: state.wallet.currencies,
});

Form.propTypes = {
  updateCurrencies: PropTypes.func.isRequired,
  currencie: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
