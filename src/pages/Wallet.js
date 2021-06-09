import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { wallet as walletAction } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      value: 0,
      method: '',
      description: '',
      currency: '',
      tag: '',
      expenses: [],
    };

    this.labelValor = this.labelValor.bind(this);
    this.labelPagamento = this.labelPagamento.bind(this);
    this.labelDescription = this.labelDescription.bind(this);
    this.setState = this.setState.bind(this);
    this.todasDespesas = this.todasDespesas.bind(this);
    this.labelTag = this.labelTag.bind(this);
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()).then((response) => {
        const object = Object.values(response);
        const lista = object.filter((itens) => itens.codein !== 'BRLT');
        this.setState({ categories: lista });
      });
  }

  todasDespesas() {
    const { wallet } = this.props;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()).then((response) => {
        const object = Object.values(response);
        const lista = object.filter((itens) => itens.codein !== 'BRLT');
        const { value, method, description, currency, tag, expenses } = this.state;
        this.setState({
          categories: lista,
          expenses: [...expenses, { value,
            currency,
            method,
            tag,
            description,
            exchangeRates: lista }],
        });
        wallet(expenses);
      });
  }

  mudaEstado({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  labelValor() {
    return (
      <label htmlFor="valor">
        Valor:
        <input
          onChange={ (event) => this.mudaEstado(event) }
          type="text"
          name="value"
          id="valor"
        />
      </label>
    );
  }

  labelPagamento() {
    return (
      <label htmlFor="despesa">
        Método de pagamento:
        <select
          onChange={ (event) => this.mudaEstado(event) }
          name="method"
          id="despesa"
        >
          <option value="cash">Dinheiro</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debit">Cartão de débito</option>
        </select>
      </label>
    );
  }

  labelDescription() {
    return (
      <label htmlFor="Descrição">
        Descrição:
        <input
          onChange={ (event) => this.mudaEstado(event) }
          type="text"
          name="description"
          id="Descrição"
        />
      </label>
    );
  }

  labelTag() {
    return (
      <label htmlFor="Tag">
        Tag
        <select onChange={ (event) => this.mudaEstado(event) } name="tag" id="Tag">
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
    const { user, carteira } = this.props;
    console.log(carteira);
    const { categories, expenses } = this.state;
    console.log(expenses);
    return (
      <>
        <header>
          <p data-testid="email-field">{user.email}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          {this.labelValor()}
          <label htmlFor="moeda">
            Moeda:
            <select
              onChange={ (event) => this.mudaEstado(event) }
              name="currency"
              id="moeda"
            >
              {categories.map(({ code }) => (
                <option
                  key={ code }
                  value={ code }
                >
                  { code }
                </option>))}
            </select>
          </label>
          {this.labelPagamento()}
          {this.labelTag()}
          {this.labelDescription()}
        </form>
        <button
          type="button"
          onClick={ () => this.todasDespesas() }
        >
          Adicionar despesa
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  carteira: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  wallet: (e) => dispatch(walletAction(e)),
});

Wallet.propTypes = {
  user: PropTypes.objectOf().isRequired,
  carteira: PropTypes.objectOf().isRequired,
  wallet: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
