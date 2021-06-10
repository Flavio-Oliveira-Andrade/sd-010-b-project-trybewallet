import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expenseOnChange } from '../actions/walletAction';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
      expense: '',
    };
    this.getValue = this.getValue.bind(this);
    this.getValueStore = this.getValueStore.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const moedas = await response.json();
    this.getMoedas(moedas);
  }

  getMoedas(moedas) {
    const arrMoedas = Object.keys(moedas);
    const moedinhas = arrMoedas.filter((moeda) => (moeda !== 'USDT'));
    this.setState({ moedas: moedinhas });
  }

  getValue({ target: { value } }) {
    this.setState({ expense: value });
  }

  getValueStore() {
    const { expense } = this.state;
    const { expenseChange } = this.props;
    expenseChange(expense);
    this.setState({ expense: '' });
  }

  selectCategory() {
    return (
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
    );
  }

  render() {
    const { moedas, expense } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            name="valor"
            id="valor"
            onChange={ this.getValue }
            value={ expense }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            {moedas.map((moeda) => (
              <option
                key={ moeda }
                value={ moeda }
              >
                {moeda}
              </option>))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento
          <select name="metodo" id="metodo">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="debito">Cartão de Débito</option>
          </select>
        </label>
        {this.selectCategory()}
        <button
          type="button"
          onClick={ this.getValueStore }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  expenseChange: PropTypes.func,
};
Form.defaultProps = {
  expenseChange: () => {},
};
const mapDispatchToProps = (dispatch) => ({
  expenseChange: (expense) => dispatch(expenseOnChange(expense)),
});

const mapStateToProps = (state) => ({
  return: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
