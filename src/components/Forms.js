import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, fetchCotation } from '../actions';
import ThreeInputs from './ThreeInputs';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      infoDispense: {
        currency: 'USD',
        description: '',
        method: 'Dinheiro',
        tag: 'Alimentação',
        value: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveExpenses = this.saveExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchCoin } = this.props;
    fetchCoin();
  }

  handleChange(event) {
    const { target: { value, name } } = event;
    const { infoDispense } = this.state;
    const { idExpense } = this.props;
    const id = idExpense;
    this.setState({
      infoDispense: {
        ...infoDispense,
        [name]: value,
        id,
      },
    });
  }

  saveExpenses() {
    const { infoDispense } = this.state;
    const { cotation } = this.props;
    cotation(infoDispense);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <main>
        <ThreeInputs
          value={ value }
          description={ description }
          currency={ currency }
          handleChange={ this.handleChange }
        />
        <form>
          <label htmlFor="method">
            Método de Pagamento
            <select
              id="method"
              value={ method }
              name="method"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de Crédito</option>
              <option value="Cartão de débito">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" value={ tag } name="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.saveExpenses }>Adicionar despesa</button>
        </form>
      </main>
    );
  }
}

Forms.propTypes = {
  fetchCoin: PropTypes.func.isRequired,
  cotation: PropTypes.func.isRequired,
  idExpense: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCoin: () => dispatch(fetchAPI()),
  cotation: (expense) => dispatch(fetchCotation(expense)),
});

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
  idExpense: state.wallet.expenses.length,
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
