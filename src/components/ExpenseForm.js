import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

class ExpenseForm extends React.Component {
  componentDidMount() {
    const { getApiToCurrencies } = this.props;
    getApiToCurrencies();
  }

  render() {
    const { getCurrencies } = this.props;
    return (
      <form>
        <label htmlFor="amount">
          Valor
          <input className="input-exp" name="amount" id="amount" type="number" />
        </label>
        <label htmlFor="description">
          Descrição
          <input className="input-exp" name="description" id="description" type="text" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select className="input-exp" name="currency" id="currency">
            { Object.keys(getCurrencies).filter((elem) => elem !== 'USDT')
              .map((elem) => (<option key={ elem } value={ elem }>{ elem }</option>)) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalhho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getApiToCurrencies: () => dispatch(fetchApi()),
});

const mapStateToProps = (state) => ({
  getCurrencies: state.wallet.currencies,
});

ExpenseForm.propTypes = {
  getApiToCurrencies: PropTypes.func.isRequired,
  getCurrencies: PropTypes.objectOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
