import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExp, loadData } from '../actions';

const Methodpay = ['Dinheiro', 'Cartão de Crédito', 'Cartão de débito'];
const Tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      curr: [],
      // value: '',
      // currency: '',
      // method: '',
      // tag: '',
      // description: '',
      // id: false,
    };
    this.getinfoAPI = this.getinfoAPI.bind(this);
  }

  componentDidMount() {
    this.getinfoAPI();
    // const { fetchAPI } = this.props;
    // fetchAPI();
  }

  async getinfoAPI() {
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const solve = await api.json();
    this.setState({ curr: solve });
  }

  render() {
    const { email, total } = this.props;
    const { curr } = this.state;
    const currency = Object.keys(curr);
    return (
      <div>
        <h1 data-testid="email-field">{ email }</h1>
        <h1 data-testid="total-field">{`$ ${total}`}</h1>
        <h1 data-testid="header-currency-field">BRL</h1>
        <form>
          <label htmlFor="valor">
            Valor
            <input
              name="valor"
              type="number"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              name="description"
              type="text"
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="moeda">
              { currency.filter((currenc) => currenc !== 'USDT')
                .map((op, index) => <option key={ index }>{op}</option>)}
            </select>
          </label>
          <label htmlFor="method_payment">
            Método de pagamento
            <select name="method_payment" id="method_payment">
              { Methodpay.map((op, index) => <option key={ index }>{op}</option>)}
            </select>
          </label>
          <label htmlFor="category_expenses">
            Tag
            <select name="category_expenses">
              {Tags.map((op, index) => (
                <option key={ index }>
                  {op}
                </option>))}
            </select>
          </label>
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
  editingExpenses: (wallet) => dispatch(editExp(wallet)),
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
