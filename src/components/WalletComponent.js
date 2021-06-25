import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tagItems, paymentMethods } from './walletIndex';
import { exchangeRates } from '../actions/index';
import WalletTable from './WalletTable';

class WalletComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyAPI: {},
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      number: 0,
    };
    this.getAPI = this.getAPI.bind(this);
    this.handle = this.handle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.text = this.text.bind(this);
    this.getTotalValue = this.getTotalValue.bind(this);
  }

  componentDidMount() {
    this.getAPI();
  }

  componentDidUpdate(prevProps) {
    const { total } = this.props;
    if (prevProps.total !== total) {
      this.getTotalValue();
    }
  }

  async getAPI() {
    const baseUrl = 'https://economia.awesomeapi.com.br/json/all';
    const endPoint = await fetch(baseUrl);
    const resolve = await endPoint.json();
    this.setState({ currencyAPI: resolve });
  }

  getTotalValue() {
    const { total } = this.props;
    this.setState({
      number: total,
    });
  }

  text(handle, value, description, currencyKeys) {
    return (
      <>
        <label htmlFor="currency">
          Currency:
          <input
            type="dropdown"
            data-testid="header-currency-field"
            value="BRL"
            onChange={ handle }
          />
        </label>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            id="value"
            value={ value }
            onChange={ handle }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ handle }
          />
        </label>
        <label htmlFor="countryCurrency">
          Moeda
          <select
            type="text"
            name="currency"
            id="countryCurrency"
            onChange={ handle }
          >
            {currencyKeys.filter((key) => key !== 'USDT')
              .map((pay, index) => <option key={ index }>{ pay }</option>)}
            );
          </select>
        </label>
      </>
    );
  }

  handle({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { data } = this.props;
    const { value,
      description, currency, method, tag, id } = this.state;
    const object = { value,
      description,
      currency,
      method,
      tag,
      id };
    this.setState({
      id: id + 1,
    });
    data(object);
  }

  render() {
    const { currencyAPI, value,
      description, number } = this.state;
    const currencyKeys = Object.keys(currencyAPI);
    const { expenses } = this.props;
    return (
      <section>
        <span
          type="number"
          data-testid="total-field"
          name="totalValue"
        >
          { `Despesas: ${number}` }
        </span>
        <form>
          {this.text(this.handle, value, description, currencyKeys)}
          <label htmlFor="payments">
            Método de pagamento
            <select
              type="text"
              name="method"
              id="payments"
              onChange={ this.handle }
            >
              {
                paymentMethods.map((pay, index) => (<option key={ index }>{pay}</option>))
              }
            </select>
          </label>
          <label htmlFor="itemExpenses">
            Tag
            <select type="text" name="tag" id="itemExpenses" onChange={ this.handle }>
              {
                tagItems.map((tag, index) => (<option key={ index }>{tag}</option>))
              }
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
        <WalletTable expenses={ expenses } />
      </section>
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
WalletComponent.propTypes = {
  data: PropTypes.func.isRequired,
  expenses: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(WalletComponent);
