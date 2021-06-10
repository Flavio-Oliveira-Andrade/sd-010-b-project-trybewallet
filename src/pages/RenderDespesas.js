import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { apagarDespesa } from '../actions';

class RenderDespesas extends React.Component {
  constructor(props) {
    super(props);
    this.excluir = this.excluir.bind(this);
  }

  excluir(index) {
    const { todasDespesasSalvas } = this.props;
    const aux = todasDespesasSalvas;
    aux.splice(index, 1);
    apagarDespesa(aux);
  }

  render() {
    const { todasDespesasSalvas } = this.props;
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
          {todasDespesasSalvas.map((des, index) => (
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
                    .ask))).toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button type="button" data-testid="edit-btn">Editar</button>
                {' '}
                <button
                  type="button"
                  onClick={ () => this.excluir(index) }
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  todasDespesasSalvas: state.wallet.expenses,

});

const mapDispatchToProps = (dispatch) => ({
  apagarDespesa: (despesa) => dispatch(apagarDespesa(despesa)),
});

RenderDespesas.propTypes = {
  todasDespesasSalvas: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(RenderDespesas);
