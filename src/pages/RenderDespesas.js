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
        {todasDespesasSalvas.map((des) => (
          <tr key={ des.id }>
            <td>{des.description}</td>
            <td>{des.tag}</td>
            <td>{des.method}</td>
            <td>{des.value}</td>
            <td>{(des.exchangeRates[des.currency].name).split('/')[0]}</td>
            <td>{parseFloat(des.exchangeRates[des.currency].ask).toFixed(2)}</td>
            <td>
              {
                ((parseFloat(des.value) * parseFloat(des.exchangeRates[des.currency]
                  .ask)))
                  .toFixed(2)
              }

            </td>
            <td>Real</td>
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
