import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, fetchExpenses } from '../actions/index';

export class ExpensesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.setId = this.setId.bind(this);
  }

  //   componentDidMount() {
  //     const { fetchCurrency } = this.props;
  //     fetchCurrency();
  //     console.log('entrei aqui');
  //   }

  setId() {
    this.setState((prev) => ({
      id: prev.id + 1,
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fetchExpense } = this.props;
    return (
      <form className="form" id="form1">
        <label htmlFor="value">
          Valor
          <input type="number" name="value" onChange={ this.handleChange } id="value" />
        </label>
        <label htmlFor="currency">
          Moeda
          {/* <select id="currency" name="currency" onChange={ this.handleChange }>
            { currencies.map((curr, idx) => <option key={ idx }>{ curr.code }</option>)}
          </select> */}
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" name="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            onChange={ this.handleChange }
            id="description"
          />
        </label>
        <button
          type="button"
          onClick={ () => { this.addId(); fetchExpense(this.state); } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencies()),
  fetchExpense: (payload) => dispatch(fetchExpenses(payload)),
});

ExpensesForm.propTypes = {
//   fetchCurrency: PropTypes.func.isRequired,
  fetchExpense: PropTypes.func.isRequired,
//   currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
