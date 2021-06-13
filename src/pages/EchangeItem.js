import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionGastos } from '../actions';

import './Wallet.css';

class EchangeItem extends React.Component {
  render() {
    const { wallet, editar } = this.props;
    const { description, tag, method, value, currency, exchangeRates, id } = wallet;
    const rate = exchangeRates[currency];
    return (
      <section className="listSection">
        {console.log(wallet)}
        <p className="itemP">{description}</p>
        <p className="itemP">{tag}</p>
        <p className="itemP">{method}</p>
        <p className="itemP">{value}</p>
        {console.log(exchangeRates)}
        {/* https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176 */}
        <p className="itemP">{rate.name.replace('/Real Brasileiro', '')}</p>
        <p className="itemP">{rate.ask}</p>
        <p className="itemP">{value * rate.ask}</p>
        <p className="itemP">Real Brasileiro</p>
        <button type="button" onClick={ () => editar(id, 'EDITAR') }>editar</button>
        {}
        <button type="button" onClick={ () => editar(id, 'APAGAR') }>excluir</button>
      </section>
    );
  }
}

EchangeItem.propTypes = {
  description: PropTypes.string,
  tag: PropTypes.string,
  method: PropTypes.string,
  value: PropTypes.number,
  currency: PropTypes.string,
  exchangeRates: PropTypes.object,
}.isRequired;

const mapDispachToProps = (dispatch) => ({
  editar: (value, tipo) => dispatch(
    actionGastos(value, tipo),
  ),
});

export default connect(null, mapDispachToProps)(EchangeItem);
