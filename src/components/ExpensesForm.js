import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { responseAction, addExpenseAction } from '../actions';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
  }

  componentDidMount() {
    const { secondDispatch } = this.props;
    secondDispatch();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { thirdDispatch } = this.props;
    thirdDispatch(this.state);
    this.setState((previousState) => ({ id: previousState.id + 1 }));
  }

  renderPaymentMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Trabalho">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          name="value"
          value={ value }
          type="text"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          name="description"
          value={ description }
          type="text"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrency() {
    const { currencies } = this.props;
    const selectedCurrency = this.state;
    return (
      <label htmlFor="currencyUsed">
        Moeda
        <select
          id="currency"
          name="currency"
          value={ selectedCurrency }
          onChange={ this.handleChange }
        >
          {(currencies).map((currency) => (
            <option key={ currency }>{currency}</option>
          )) }
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        {this.renderPaymentMethod()}
        {this.renderTag()}
        {this.renderValue()}
        {this.renderDescription()}
        {this.renderCurrency()}
        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar Despesas
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  secondDispatch: () => dispatch(responseAction()),
  thirdDispatch: (items) => dispatch(
    addExpenseAction(items),
  ),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

ExpensesForm.propTypes = ({
  currencies: PropTypes.arrayOf.isRequired,
  secondDispatch: PropTypes.func.isRequired,
  thirdDispatch: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
