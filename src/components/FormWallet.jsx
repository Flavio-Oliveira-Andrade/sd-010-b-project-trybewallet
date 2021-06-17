import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoinsThunk, addExpense } from '../actions';
import Pagamento from './Pagamento';
import Tag from './Tag';
import Inputs from './Inputs';

class FormWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      descrição: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  changeHandler({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  // async fetchAPI() {
  //   return fetch('https://economia.awesomeapi.com.br/json/all')
  //     .then((resultado) => resultado.json());
  // }

  render() {
    const { currencies, addExpenses } = this.props;
    return (
      <form>
        <Inputs onChange={ this.changeHandler } />
        <label htmlFor="moeda">
          Moeda:
          {' '}
          <select id="moeda" onChange={ this.changeHandler }>
            {!currencies
              ? <option value="BRL">BRL</option>
              : currencies.map((currency) => (
                <option key={ currency } value={ currency }>{ currency }</option>
              ))}
          </select>
        </label>
        <Pagamento onChange={ this.changeHandler } />
        <Tag onChange={ this.changeHandler } />
        <button
          type="button"
          onClick={ () => { addExpenses(this.state); } }
        >
          Adicionar Despesa
        </button>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(getCoinsThunk()),
  addExpenses: (state) => dispatch(addExpense(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormWallet.propTypes = {
  addExpenses: PropTypes.func.isRequired,
  getCoins: PropTypes.func.isRequired,
  map: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
