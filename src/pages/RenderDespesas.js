import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function RenderDespesas(props) {
  const { todasDespesasSalvas } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de Pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor Convertido</th>
          <th>Moeda de Conversão</th>
        </tr>
      </thead>
      <tbody>
        {todasDespesasSalvas.map((des) => (
          <tr key={ des.id }>
            <td>{des.description}</td>
            <td>{des.tag}</td>
            <td>{des.method}</td>
            <td>{des.value}</td>
            <td>{des.currency}</td>
            <td>{des.exchangeRates[des.currency].ask}</td>
            <td>
              {
                (parseFloat(des.value) * parseFloat(des.exchangeRates[des.currency].ask))
              }

            </td>
            <td>Real Brasileiro</td>
          </tr>))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  todasDespesasSalvas: state.wallet.expenses,

});

RenderDespesas.propTypes = {
  todasDespesasSalvas: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps)(RenderDespesas);
