import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currencyAPI } from '../actions';

class Form extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const { dispatchAPI } = this.props;
    dispatchAPI();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="valor-despesa">
            Valor:
            <input type="number" name="valor-despesa" id="valor-despesa" />
          </label>
          <label htmlFor="descricao-despesa">
            Descrição:
            <input type="text" name="descricao-despesa" id="descricao-despesa" />
          </label>
          <label htmlFor="select-moeda">
            Moeda:
            <select name="select-moeda" id="select-moeda">
              {Object.keys(currencies).filter((cur) => cur !== 'USDT')
                .map((cur) => <option key={ cur } value={ cur }>{cur}</option>)}
            </select>
          </label>
          <label htmlFor="metodo-pagamento-despesa">
            Método de pagamento:
            <select
              type="text"
              name="metodo-pagamento-despesa"
              id="metodo-pagamento-despesa"
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao-de-credito">Cartão de crédito</option>
              <option value="cartao-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-despesa">
            Tag:
            <select type="text" name="tag-despesa" id="tag-despesa">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAPI: () => (dispatch(currencyAPI())),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.objectOf.isRequired,
  dispatchAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
