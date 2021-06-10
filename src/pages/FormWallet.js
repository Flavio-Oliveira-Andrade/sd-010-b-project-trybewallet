/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI as fetchApi } from '../actions/index';

// const paymentWays = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
// const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class FormWallet extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  // this.setState({
  //   currencies: wallet,
  // });

  render() {
    const { currencies } = this.props;
    // console.log(currencies);
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="text"
              name="value"
              id="value"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              name="description"
              id="description"
            />
          </label>
          <label htmlFor="currencies">
            Moeda
            <select name="currencies" id="currencies">
              {currencies.map((c) => <option value={ c } key={ c }>{c}</option>)}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select name="payment" id="payment">
              <option value="money">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Tag
            <select name="category" id="category">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchApi()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormWallet.propTypes = {
  currencies: PropTypes.arrayOf.isRequired,
  fetchAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
