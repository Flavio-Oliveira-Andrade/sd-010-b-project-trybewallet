import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectDespesa from './SelectDespesa';
import SelectPay from './SelectPay';

import { actionAsk, actionCurrency } from '../actions/walletaction';

class Form extends React.Component {
  constructor() {
    super();

    this.reduceArray = this.reduceArray.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      request: [],
      valor: '',
      description: '',
      moeda: 'USD',
      metodo: 'Dinheiro',
      despesas: 'Alimentacao',
    };
  }

  componentDidMount() {
    const { request } = this.props;
    request().then((resolve) => {
      const array = Object.values(resolve);
      this.setState({ request: array });
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  reduceArray() {
    const { request } = this.state;
    const array = [...request];
    array.splice(1, 1);
    return array.map((element, index) => (
      <option key={ index } value={ element.code }>{ element.code }</option>));
  }

  handleClick() {
    const { valor, description, moeda, metodo, despesas } = this.state;
    const { add, request, expenses } = this.props;
    let obj = {};
    return request().then((resolve) => {
      obj = {
        id: expenses.length,
        value: valor,
        description,
        currency: moeda,
        method: metodo,
        tag: despesas,
        exchangeRates: { ...resolve },
      };
      return obj;
    }).then((result) => add(result));
  }

  render() {
    const { request, valor, description, moeda, metodo, despesas } = this.state;
    const { handleChange } = this;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            id="valor"
            name="valor"
            value={ valor }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            id="descricao"
            name="description"
            value={ description }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="moeda"
            value={ moeda }
            onChange={ (e) => handleChange(e) }
          >
            { request && this.reduceArray() }
          </select>
        </label>
        <SelectPay metodo={ metodo } handleChange={ handleChange } />
        <SelectDespesa despesas={ despesas } handleChange={ handleChange } />
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (obj) => dispatch(actionCurrency(obj)),
  request: () => dispatch(actionAsk()),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  add: PropTypes.func.isRequired,
  request: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
