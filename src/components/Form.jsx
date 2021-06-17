import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currencyAPI, fetchCotation } from '../actions';
import FormVDM from './FormVDM';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseDetails: {
        currency: '',
        description: '',
        method: '',
        tag: '',
        value: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    const { dispatchAPI } = this.props;
    dispatchAPI();
  }

  handleChange(event) {
    const { target: { value, name } } = event;
    const { expenseDetails } = this.state;
    const { expenseId } = this.props;
    const id = expenseId;
    this.setState({
      expenseDetails: {
        ...expenseDetails,
        [name]: value,
        id,
      },
    });
  }

  addExpense() {
    const { expenseDetails } = this.state;
    const { cotation } = this.props;
    cotation(expenseDetails);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, method, currency, tag } = this.state;
    return (
      <div>
        <form>
          <FormVDM
            value={ value }
            description={ description }
            method={ method }
            handleChange={ this.handleChange }
          />
          <label htmlFor="select-moeda">
            Moeda:
            <select
              name="currency"
              id="select-moeda"
              onChange={ this.handleChange }
              value={ currency }
            >
              {Object.keys(currencies).filter((cur) => cur !== 'USDT')
                .map((cur) => <option key={ cur } value={ cur }>{cur}</option>)}
            </select>
          </label>
          <label htmlFor="tag-despesa">
            Tag:
            <select
              type="text"
              name="tag"
              id="tag-despesa"
              onChange={ this.handleChange }
              value={ tag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </form>
        <button type="button" onClick={ this.addExpense }>Adicionar despesa</button>
      </div>
    );
  }
}

Form.propTypes = {
  cotation: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
  dispatchAPI: PropTypes.func.isRequired,
  expenseId: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchAPI: () => (dispatch(currencyAPI())),
  cotation: (expense) => (dispatch(fetchCotation(expense))),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expense: state.wallet.expenseDetails,
  expenseId: state.wallet.expenses.length,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
