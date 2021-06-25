import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData } from '../actions';
import Button from './Button';

const Methodpay = ['Dinheiro', 'Cartão de Crédito', 'Cartão de débito'];
const Tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      curr: [],
      expense: {
        value: '',
        currency: '',
        method: '',
        tag: '',
        description: '',
        id: 0,
      },
    };
    this.getinfoAPI = this.getinfoAPI.bind(this);
  }

  componentDidMount() {
    this.getinfoAPI();
  }

  async getinfoAPI() {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const solve = await api.json();
    this.setState({ curr: solve });
  }

  handleChange(event) {
    const { expense } = this.state;
    this.setState({
      expense: {
        ...expense,
        [event.target.name]: event.target.value,
      },
    });
  }

  render() {
    const { email, total } = this.props;
    const { curr, expense: { value } } = this.state;
    const currency = Object.keys(curr);
    return (
      <div>
        <h1 data-testid="email-field">{ email }</h1>
        <h1 data-testid="total-field">{`$ ${total}`}</h1>
        <h1 data-testid="header-currency-field">BRL</h1>
        <form>
          <label htmlFor="value">
            Valor
            <input
              name="value"
              type="number"
              onChange={ this.handleChange }
              value={ value }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input name="description" id="description" onChange={ this.handleChange } />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency" id="currency" onChange={ this.handleChange }>
              { currency.filter((currenc) => currenc !== 'USDT')
                .map((op, index) => <option key={ index }>{op}</option>)}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select name="method" id="method" onChange={ this.handleChange }>
              { Methodpay.map((op, index) => <option key={ index }>{op}</option>)}
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag" onChange={ this.handleChange }>
              {Tags.map((op, index) => (
                <option key={ index }>
                  {op}
                </option>))}
            </select>
          </label>
          <Button onClick={ this.handleClick } />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  getinfoAPI: () => dispatch(loadData()),
  addingExpenses: (wallet) => dispatch(loadData(wallet)),
  // editingExpenses: (wallet) => dispatch(editExp(wallet)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  // currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number,
  // getinfoAPI: PropTypes.func.isRequired,
  // addingExpenses: PropTypes.func.isRequired,
  // editingExpenses: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
