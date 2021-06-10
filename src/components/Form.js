import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import addExpenseAction from '../actions/addExpenseAction';

// const intitialState = {
// id: 0,
// value: 0,
// description: '',
// currency: 'USD',
// method: 'Dinheiro',
// tag: 'Alimentação',
// exchangeRates: {},
// };

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: { ...props.data },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { addExpense, data } = this.props;
    this.setState({ exchangeRates: data });
    addExpense(this.state);
    this.setState((previousState) => ({ id: previousState.id + 1, exchangeRates: data }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input name="value" onChange={ this.handleChange } type="text" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input name="description" onChange={ this.handleChange } type="text" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select onChange={ this.handleChange } name="currency">
            {currencies
              .map((moeda) => (moeda !== 'USDT' ? <option>{moeda}</option> : null))}
          </select>
        </label>
        Método de pagamento:
        <select onChange={ this.handleChange } name="method">
          <option name="method">Dinheiro</option>
          <option name="method">Cartão de crédito</option>
          <option name="method">Cartão de débito</option>
        </select>
        Tag:
        <select onChange={ this.handleChange } name="tag">
          <option name="tag">Alimentação</option>
          <option name="tag">Lazer</option>
          <option name="tag">Trabalho</option>
          <option name="tag">Transporte</option>
          <option name="tag">Saúde</option>
        </select>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.string.isRequired,
  addExpense: PropTypes.func.isRequired,
  data: PropTypes.shape(Object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  data: state.wallet.data,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (stateData) => dispatch(addExpenseAction(stateData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
