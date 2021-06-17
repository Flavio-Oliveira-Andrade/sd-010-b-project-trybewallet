import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchOnComponentDidMount, dispatchExpense } from '../actions';
import MapCurrencies from '../components/MapCurrencies';
import AddExpenses from '../components/AddExpenses';
import Header from '../components/Header';
import popOutUSDT from '../selectors';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      // value: '0',
      // currency: 'USD',
      // description: '',
      // method: 'Cartão de crédito',
      // tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchMapDispatchToProps } = this.props;
    fetchMapDispatchToProps();
  }

  handleChange(event) {
    const { target: { id: key, value } } = event;
    this.setState({
      [key]: value,
    });
  }

  render() {
    const { email, currencies, handleDispatchExpense, total } = this.props;
    return (
      <>
        <Header total={ total } email={ email } />
        <form>
          <label htmlFor="value">
            Valor
            <input onChange={ this.handleChange } type="text" id="value" name="valor" />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              onChange={ this.handleChange }
              type="text"
              id="description"
              name="despesa"
            />
          </label>
          {(currencies && currencies.length)
            ? <MapCurrencies currencies={ currencies } onChange={ this.handleChange } />
            : null }
          <label htmlFor="method">
            Método de pagamento
            <select onChange={ this.handleChange } id="method" name="metodo-pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select onChange={ this.handleChange } id="tag" name="categoria-despesa">
              <option value="Alimentacao">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saude">Saúde</option>
            </select>
          </label>
          <AddExpenses
            state={ this.state }
            handleDispatchExpense={ handleDispatchExpense }
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { user: { email }, wallet: { currencies, total } } = state;
  const filteredCurrencies = popOutUSDT(Object.values(currencies));
  return {
    email,
    currencies: filteredCurrencies,
    total,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleDispatchExpense: (expenses) => dispatch(dispatchExpense(expenses)),
  fetchMapDispatchToProps: () => dispatch(fetchOnComponentDidMount()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchMapDispatchToProps: PropTypes.func.isRequired,
  currencies: PropTypes.shape(PropTypes.object).isRequired,
  handleDispatchExpense: PropTypes.func.isRequired,
  total: PropTypes.string,
};

Wallet.defaultProps = {
  total: '0',
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
