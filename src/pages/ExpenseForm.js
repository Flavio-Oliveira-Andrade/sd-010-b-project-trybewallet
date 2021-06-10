import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions';

class ExpenseForm extends React.Component {
  componentDidMount() {
    const { fetchMoedas } = this.props;
    fetchMoedas();
  }

  render() {
    const { currencies } = this.props;
    const arrayCurrencies = Object.keys(currencies);
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            { arrayCurrencies
              .map((currencie) => ((currencie !== 'USDT')
                ? <option>{currencie}</option>
                : null))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento" id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Tag
          <select name="categoria" id="categoria">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

ExpenseForm.propTypes = {
  fetchMoedas: PropTypes.func.isRequired,
  currencies: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: () => dispatch(fetchApi()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
