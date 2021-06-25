import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tagItems, payMethod } from './WalletArrays';
import HeaderWallet from './HeaderWallet';
import { loadDataSuccess } from '../actions/index';
import Table from './Table';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
      expense: {
        id: 0,
        value: '',
        currency: '',
        method: '',
        tag: '',
        description: '',
      },
    };
    this.handle = this.handle.bind(this);
    this.getApi = this.getApi.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resolve = await api.json();
    this.setState({ coins: resolve });
  }

  handle({ target: { value, name } }) {
    const { expense } = this.state;
    this.setState({
      expense: {
        ...expense,
        [name]: value,
      },
    });
  }

  handleClick() {
    const { expense } = this.state;
    const { expense: { id } } = this.state;
    this.setState({
      expense: {
        ...expense,
        id: id + 1,
      },
    });
    const { data } = this.props;
    data(expense);
  }

  render() {
    const { coins } = this.state;
    const { expenses, total, email } = this.props;
    const coinsArr = Object.keys(coins);
    return (
      <header>
        <HeaderWallet value={ total } email={ email } onChange={ this.handle } />
        <form>
          <label htmlFor="value">
            Valor
            <input type="number" name="value" id="value" onChange={ this.handle } />
          </label>
          <label htmlFor="description">
            Descrição
            <input id="description" name="description" onChange={ this.handle } />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency" name="currency" onChange={ this.handle }>
              {
                coinsArr
                  .filter((item) => item !== 'USDT')
                  .map((item, index) => <option key={ index }>{item}</option>)
              }
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method" name="method" onChange={ this.handle }>
              {payMethod.map((item, index) => <option key={ index }>{item}</option>)}
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" name="tag" onChange={ this.handle }>
              {tagItems.map((item, index) => <option key={ index }>{item}</option>)}
            </select>
          </label>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
        <Table expenses={ expenses } />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  data: (state) => dispatch(loadDataSuccess(state)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  data: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
