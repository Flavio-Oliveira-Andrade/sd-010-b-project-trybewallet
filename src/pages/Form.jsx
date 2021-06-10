import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCambio } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { coinsAction } = this.props;
    coinsAction();
  }

  render() {
    const { currencies } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input id="valor" type="text" name="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input id="descricao" type="text" name="valor" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              {currencies.filter((cur) => cur !== 'USDT')
                .map((currenc) => <option key={ currenc }>{currenc}</option>)}
            </select>
          </label>
          <label htmlFor="metodoDePagamento">
            Método de pagamento:
            <select id="metodoDePagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag
            <select id="Tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
            <button type="button">Adicionar Despesa</button>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  coinsAction: () => dispatch(fetchCambio()),
});

Form.propTypes = {
  coinsAction: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
