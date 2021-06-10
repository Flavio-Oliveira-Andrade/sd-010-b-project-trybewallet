import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionNovaDespesa } from '../actions';

class AddExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      moedas: [],
    };
  }

  componentDidMount() {
    this.getCurr();
  }

  async getCurr() {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await result.json();

    console.log(data);

    const moedas = Object.keys(data);
    moedas.splice(1, 1);
    this.setState({ moedas });
  }

  handleClick() {
    const { novaDespesa, expenses } = this.props;
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

    novaDespesa(payload);
  }

  render() {
    const { moedas } = this.state;
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
              {moedas.map((moeda) => (
                <option key={ moeda } value={ moeda }>
                  {moeda}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select id="metodo">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <input type="button" value="Adicionar" onClick={ () => this.handleClick() } />
        </form>
      </div>
    );
  }
}

AddExpense.propTypes = {
  novaDespesa: propTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  novaDespesa: (payload) => dispatch(actionNovaDespesa(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
