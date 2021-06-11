import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function RenderHeader(props) {
  const { email, todasDespesasSalvas } = props;
  let totalDespesas = 0;
  todasDespesasSalvas.forEach((des) => {
    totalDespesas
    += parseFloat(((parseFloat(des.value)
    * parseFloat(des.exchangeRates[des.currency].ask))).toFixed(2));
  });
  return (
    <header>
      <p data-testid="email-field">
        Boas vindas
        {' '}
        {email}
        {' '}
      </p>
      {' '}
      <br />
      {' '}
      <div data-testid="total-field">
        Despesa Total:
        { totalDespesas }
        {' '}
      </div>
      <span data-testid="header-currency-field">BRL</span>
    </header>);
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  moedas: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
  todasDespesasSalvas: state.wallet.expenses,
  dados: state.wallet.dados,

});

RenderHeader.propTypes = {
  email: PropTypes.string,
  todasDespesasSalvas: PropTypes.Object,
}.isRequired;

export default connect(mapStateToProps)(RenderHeader);
