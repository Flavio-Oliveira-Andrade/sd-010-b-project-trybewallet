import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, addExpense } from '../actions';

class Expense extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.renderizaSelectMoeda = this.renderizaSelectMoeda.bind(this);
    this.selectPayment = this.selectPayment.bind(this);
    this.renderizaSelectTag = this.renderizaSelectTag.bind(this);
    this.renderizaInput = this.renderizaInput.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  onClick() {
    const { addExpenses, getCurrency } = this.props;

    this.setState((previousState) => ({
      id: previousState.id + 1,
      value: 0,
      description: '',
    }));

    addExpenses(this.state);
    getCurrency();
  }

  selectPayment() {
    const { method } = this.state;
    return (
      <select
        data-testid="method-input"
        value={ method }
        id="payment"
        onChange={ (e) => this.setState({ method: e.target.value }) }
      >
        <option key="dinheiro" value="Dinheiro">Dinheiro</option>
        <option
          key="Cartão de crédito"
          value="Cartão de crédito"
        >
          Cartão de crédito
        </option>
        <option value="Cartão de débito" key="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }

  renderizaInput() {
    const { value } = this.state;
    return (
      <input
        type="text"
        id="valor"
        className="valor"
        data-testid="value-input"
        value={ value }
        onChange={ (e) => this.setState({ value: e.target.value }) }
      />
    );
  }

  renderizaSelectMoeda() {
    const { currencies, loading } = this.props;
    const { currency } = this.state;
    return (
      <select
        data-testid="currency-input"
        value={ currency }
        id="moeda"
        onChange={ (e) => this.setState({ currency: e.target.value }) }
      >
        { loading ? null : Object.keys(currencies).filter(
          (result) => result !== 'USDT',
        ).map((result, index) => (
          <option
            key={ index }
            value={ result }
            data-testid={ result }
          >
            { result }
          </option>
        ))}
      </select>
    );
  }

  renderizaSelectTag() {
    const { tag } = this.state;
    return (
      <select
        data-testid="tag-input"
        value={ tag }
        id="tag"
        onChange={ (e) => this.setState({ tag: e.target.value }) }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    );
  }

  render() {
    const { description } = this.state;
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          {this.renderizaInput()}
        </label>
        <label
          htmlFor="moeda"
        >
          Moeda:
          {this.renderizaSelectMoeda()}
        </label>
        <label
          htmlFor="payment"
        >
          Método de pagamento:
          {this.selectPayment()}
        </label>
        <label
          htmlFor="tag"
        >
          Tag:
          {this.renderizaSelectTag()}
        </label>
        <label htmlFor="name">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            value={ description }
            onChange={ (e) => this.setState({ description: e.target.value }) }
          />
        </label>
        <button
          type="button"
          onClick={ this.onClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  loading: state.wallet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchAPI()),
  addExpenses: (state) => dispatch(
    addExpense(state),
  ),
});

Expense.propTypes = {
  currencies: PropTypes.string.isRequired,
  getCurrency: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  addExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
