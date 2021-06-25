import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionNewMoney } from '../actions';

class AddMoney extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.getJson();
  }

  async getJson() {
    const resultFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resultJson = await resultFetch.json();
    const coins = Object.keys(resultJson);
    coins.splice(1, 1);
    this.setState({ coins });
  }

  handleClick() {
    const { newExpense, expenses } = this.props;
    let id = 0;
    if (expenses.length > 0) {
      id = expenses[expenses.length - 1].id + 1;
    }

    const payload = {
      id,
      value: document.getElementById('valor').value,
      description: document.getElementById('descricao').value,
      currency: document.getElementById('moeda').value,
      method: document.getElementById('metodo').value,
      tag: document.getElementById('tag').value,
    };

    newExpense(payload);
  }

  render() {
    const { coins } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              {coins.map((moeda) => (
                <option key={ moeda } value={ moeda }>
                  {moeda}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select id="metodo">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ () => this.handleClick() }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

AddMoney.propTypes = {
  newExpense: propTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  newExpense: (payload) => dispatch(actionNewMoney(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMoney);
