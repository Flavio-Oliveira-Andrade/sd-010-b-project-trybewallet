import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrencies from '../actions/walletAction';

// const currencyOptions = ['GBP', 'BRL', 'USD'];
const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'GBP',
      payment: 'Cartão de crédito',
      tag: 'Lazer',
    };

    this.handleChange = this.handleChange.bind(this);
    this.input = this.input.bind(this);
    this.select = this.select.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleChange({ target }) { // event desconstruction
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  input(name, type, value, label) {
    return (
      <label htmlFor={ name }>
        { `${label}: ` }
        <input
          id={ name }
          name={ name }
          onChange={ this.handleChange }
          type={ type }
          value={ value }
        />
      </label>
    );
  }

  select(name, value, label, options) {
    return (
      <label htmlFor={ name }>
        { `${label}: ` }
        <select
          id={ name }
          name={ name }
          onChange={ this.handleChange }
          value={ value }
        >
          { options.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>
          )) }
        </select>
      </label>);
  }

  render() {
    const { value, description, currency, payment, tag } = this.state;
    const { emailUser, total, currencies } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{`User: ${emailUser}`}</p>
          <p data-testid="total-field">{`Total: R$${total}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          { this.input('value', 'number', value, 'Valor') }
          { this.input('description', 'text', description, 'Descrição') }
          { this.select('currency', currency, 'Moeda', currencies) }
          { this.select('payment', payment, 'Método de Pagamento', paymentMethods) }
          { this.select('tag', tag, 'Tag', tagOptions) }
          <button type="button">submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  total: state.wallet.total,
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
  total: PropTypes.number,
  fetchCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Wallet.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
