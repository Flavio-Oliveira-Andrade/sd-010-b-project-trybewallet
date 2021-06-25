import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { moedaCifrao, actionNovaDespesa } from '../actions';

class AddExpense extends Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies();
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
    const { moedas } = this.props;

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
              { Object.values(moedas).map((item) => (
                <option key={ item.code } value={ item.code }>{ item.code }</option>
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

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(moedaCifrao()),
  novaDespesa: (payload) => dispatch(actionNovaDespesa(payload)),
});

AddExpense.propTypes = ({
  currencies: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
