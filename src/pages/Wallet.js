import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getApi, actionSave } from '../actions';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: '',
  method: '',
  tag: '',
  exchangeRates: '',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputValor = this.inputValor.bind(this);
    this.inputDescripiton = this.inputDescripiton.bind(this);
    this.inputMoeda = this.inputMoeda.bind(this);
    this.inputPaymente = this.inputPaymente.bind(this);
    this.inputCategory = this.inputCategory.bind(this);
    this.inputHeader = this.inputHeader.bind(this);
  }

  componentDidMount() {
    const { currenciesApi } = this.props;
    currenciesApi();
  }

  handleClick() {
    const { data, saveState } = this.props;

    this.setState({ exchangeRates: data }, () => saveState(this.state));
    this.setState(INITIAL_STATE);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  inputValor() {
    return (
      <label htmlFor="idValor">
        Valor
        <input type="text" name="value" id="idValor" onChange={ this.handleChange } />
      </label>);
  }

  inputDescripiton() {
    return (
      <label htmlFor="idDescription">
        Descrição
        <input
          type="text"
          name="description"
          id="idDescription"
          onChange={ this.handleChange }
        />
      </label>);
  }

  inputMoeda() {
    const { currencies } = this.props;
    const newCurrenci = currencies.filter((element) => element !== 'USDT');

    return (

      <label htmlFor="idMoeda">
        Moeda
        <select name="currency" id="idMoeda" onChange={ this.handleChange }>
          {newCurrenci.map((currency, index) => (
            <option key={ index }>{currency}</option>))}
        </select>
      </label>);
  }

  inputPaymente() {
    return (
      <label htmlFor="idMethod">
        Método de Pagamento
        <select name="method" id="idMethod" onChange={ this.handleChange }>
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputCategory() {
    return (
      <label htmlFor="idCategory">
        Tag
        <select name="tag" id="idCategory" onChange={ this.handleChange }>
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }

  inputHeader() {
    const { userEmail } = this.props;
    return (
      <>
        <h4 data-testid="email-field">{userEmail}</h4>
        <span data-testid="total-field">
          Despesa Total:
          {' '}
          {0}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </>
    );
  }

  render() {
    return (
      <>
        <header>
          {this.inputHeader()}
        </header>

        <forms>
          {this.inputValor()}
          {this.inputDescripiton()}
          {this.inputMoeda()}
          {this.inputPaymente()}
          {this.inputCategory()}
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>

        </forms>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
  loading: state.wallet.loading,
  data: state.wallet.data,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesApi: () => dispatch(getApi()),
  saveState: (saveState) => dispatch(actionSave(saveState)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currenciesApi: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
