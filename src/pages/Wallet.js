import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tagItems, payMethod } from './WalletArrays';
import HeaderWallet from './HeaderWallet';
import { exchangeRates } from '../actions/index';
import Table from './Table';
import ButtonAdd from './buttonAdd';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
      number: 0,
      expenses: {
        id: 0,
        value: 0,
        currency: '',
        method: '',
        tag: '',
        description: '',
      },
    };
    this.handle = this.handle.bind(this);
    this.getApi = this.getApi.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.transformNumber = this.transformNumber.bind(this);
    this.createLabel = this.createLabel.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  componentDidUpdate(prevProps) {
    const { total } = this.props;
    if (prevProps.total !== total) {
      this.transformNumber();
    }
  }

  async getApi() {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resolve = await api.json();
    this.setState({ coins: resolve });
  }

  transformNumber() {
    const { total } = this.props;
    const transform = total === 0 ? parseFloat(Math.round(total * 100) / 100).toFixed(2)
      : Number(total);
    this.setState({ number: transform });
  }

  createLabel(handle, value) {
    return (
      <>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            value={ value }
            name="value"
            id="value"
            onChange={ handle }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" name="description" onChange={ handle } />
        </label>
      </>
    );
  }

  handle({ target: { value, name } }) {
    const { expenses } = this.state;
    this.setState({
      expenses: {
        ...expenses,
        [name]: value,
      },
    });
  }

  handleClick() {
    const { expenses } = this.state;
    const { expenses: { id } } = this.state;
    this.setState({
      expenses: {
        ...expenses,
        id: id + 1,
      },
    });
    const { data } = this.props;
    data(expenses);
  }

  render() {
    const { coins, number, expenses: { value } } = this.state;
    const { expenses, total, email } = this.props;
    console.log(this.props);
    const coinsArr = Object.keys(coins);
    return (
      <header>
        <HeaderWallet value={ total } email={ email } onChange={ this.handle } />
        <span data-testid="total-field">
          {`Total das despesas: ${number}`}
        </span>
        <form>
          {this.createLabel(this.handle, value)}
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
          <ButtonAdd onClick={ this.handleClick } />
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
  data: (state) => dispatch(exchangeRates(state)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  data: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
