import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApi, addData } from '../actions/wallet';
import Select from './select';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };

    this.getExpenses = this.getExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderCurrencysOptions = this.renderCurrencysOptions.bind(this);
    // this.setExchangeRates = this.setExchangeRates.bind(this);
  }

  async componentDidMount() {
    const { request } = this.props;
    await request();
  }

  async getExpenses(e) {
    const { setExpenses } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    // const apiCurrencies = await request();
    const result = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((resultado) => resultado);
    console.log(result);
    // console.log(apiCurrencies.payload);
    const data = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: result,
    };

    // await action(data);

    const idPlus = id + 1;
    this.setState({
      id: idPlus,
    });
    if (!data) {
      e.preventDefault();
    }
    setExpenses(data);
  }

  handleChange({ value, id }) {
    this.setState({
      [id]: value,
    });
  }

  renderCurrencysOptions() {
    const { currencies } = this.props;
    return currencies.map((info, key) => (
      <option key={ key } value={ info.code }>{ info.code }</option>
    ));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="form">
        <label htmlFor="value">
          Valor
          <input
            type="number"
            min="0"
            id="value"
            onChange={ (e) => this.handleChange(e.target) }
            value={ value }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            onChange={ (e) => this.handleChange(e.target) }
            value={ description }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="moeda"
            onChange={ (e) => this.handleChange(e.target) }
            value={ currency }
          >
            { this.renderCurrencysOptions() }
          </select>
        </label>
        <Select
          onChange={ (e) => this.handleChange(e.target) }
          method={ method }
          tag={ tag }
        />
        <button type="button" onClick={ this.getExpenses }>Adicionar Despesa</button>
      </form>
    );
  }
}

Form.defaultProps = {
  currencies: { '': '' },
};

Form.propTypes = {
  request: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string),
  setExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(requestApi()),
  setExpenses: (data) => dispatch(addData(data)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
