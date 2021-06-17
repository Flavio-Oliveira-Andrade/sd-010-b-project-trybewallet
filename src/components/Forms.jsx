import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, fetchPrice } from '../actions';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.putExpenses = this.putExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      expensesInfo: {
        value: '',
        currency: '',
        method: '',
        tag: '',
        description: '',
        id: 0,
      },
    };
  }

  componentDidMount() {
    const { fetchDispatch } = this.props;
    fetchDispatch();
  }

  // componentes //

  handleChange({ target }) {
    const { name, value } = target;
    const { idExpense } = this.props;
    const id = idExpense;
    const { expensesInfo } = this.state;
    this.setState({
      expensesInfo: { ...expensesInfo, id, [name]: value },
    });
  }

  putExpenses() {
    const { expensesInfo } = this.state;
    const { cotation } = this.props;
    cotation(expensesInfo);
  }

  render() {
    const { currencies } = this.props;
    return (
      <main>
        <form>
          <label htmlFor="valor">
            Valor
            <input
              type="number"
              name="value"
              id="valor"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input name="description" id="descricao" onChange={ this.handleChange } />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="currency" id="moeda" onChange={ this.handleChange }>
              {Object.keys(currencies).filter((currency) => currency !== 'USDT')
                .map((map$) => <option key={ map$ } value={ map$ }>{map$}</option>)}
            </select>
          </label>
          <label htmlFor="método de pagamento">
            Método de pagamento
            <select name="method" id="método de pagamento" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categorie">
            Tag
            <select name="tag" id="categorie" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.putExpenses }>Adicionar despesa</button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchDispatch: () => (dispatch(fetchAPI())),
  cotation: (state) => dispatch(fetchPrice(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  idExpense: state.wallet.expenses.length,
});

// Forms.propTypes = {
//   sendFetch: PropTypes.func.isRequired,
//   cotation: PropTypes.func.isRequired,
//   idExpense: PropTypes.number.isRequired,
//   currencies: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
