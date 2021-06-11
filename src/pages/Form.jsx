import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCambio, expensesAction } from '../actions';
import fetchCambioApi from '../services/fetchCambioApi';

class Form extends React.Component {
  constructor() {
    super();

    this.hChange = this.hChange.bind(this);
    this.valorAndDescrit = this.valorAndDescrit.bind(this);
    this.tag = this.tag.bind(this);
    this.funcExchangeRates = this.funcExchangeRates.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.state = {
      spending: {
        id: 0,
        value: '',
        description: '',
        currency: 'USD',
        method: '',
        tag: '',
        exchangeRates: [],
      },
    };
  }

  componentDidMount() {
    const { coinsAction } = this.props;
    coinsAction();
  }

  hChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((oldState) => ({
      spending: {
        ...oldState.spending,
        [name]: value,
      },
    }));
  }

  async funcExchangeRates() {
    const { spending } = this.state;
    const { spendAc } = this.props;
    const resp = await fetchCambioApi();
    const stateAuxiliar = {
      ...spending,
      exchangeRates: resp,
    };
    spendAc(stateAuxiliar);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      spending: {
        id: +1,
        value: '',
        description: '',
        currency: 'USD',
        method: '',
        tag: '',
        exchangeRates: [],
      },
    });
  }

  valorAndDescrit() {
    const { spending: { value, description } } = this.state;
    return (
      <>
        <label htmlFor="value">
          Valor:
          <input
            onChange={ this.hChange }
            value={ value }
            id="value"
            type="number"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            onChange={ this.hChange }
            value={ description }
            id="description"
            type="text"
            name="description"
          />
        </label>
      </>
    );
  }

  tag() {
    const { spending: { tag } } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select onChange={ this.hChange } value={ tag } id="tag" name="tag">
          <option>{}</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    const { spending: { method, currency } } = this.state;

    return (
      <div>
        <form>
          { this.valorAndDescrit() }
          <label htmlFor="currency">
            Moeda
            <select
              onChange={ this.hChange }
              value={ currency }
              id="currency"
              name="currency"
            >
              {currencies.filter((cur) => cur !== 'USDT')
                .map((currenc) => <option key={ currenc }>{currenc}</option>)}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select onChange={ this.hChange } value={ method } id="method" name="method">
              <option>{}</option>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          {this.tag()}
          <button
            onClick={ () => {
              this.funcExchangeRates();
              // this.idMoreOne();
            } }
            type="button"
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  coinsAction: () => dispatch(fetchCambio()),
  spendAc: (spending) => dispatch(expensesAction(spending)),
});

Form.propTypes = {
  coinsAction: PropTypes.func,
  // expensesAction: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
