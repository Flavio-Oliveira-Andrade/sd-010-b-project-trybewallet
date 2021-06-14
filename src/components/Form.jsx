import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApi, addData } from '../actions/wallet';
import Select from './select';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.getExpenses = this.getExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderCurrencysOptions = this.renderCurrencysOptions.bind(this);
  }

  componentDidMount() {
    const { request } = this.props;
    return request();
  }

  async getExpenses(e) {
    const { setExpenses } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    await this.setExpensesRates();
    const data = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    if (!data) {
      e.preventDefault();
    }
    setExpenses(data);
  }

  setExpensesRates() {
    const { currencies, request } = this.props;
    request();
    // const dale = currencies.currencies;
    this.setState({
      exchangeRates: currencies,
    });
  }

  handleChange({ value, id }) {
    this.setState({
      [id]: value,
    });
  }

  renderCurrencysOptions() {
    const { currencies } = this.props;
    return currencies.currencies.map((info, key) => (
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
  currencies: [],
};

Form.propTypes = {
  request: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string),
  setExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(requestApi()),
  setExpenses: (data) => dispatch(addData(data)),
});

const mapStateToProps = ({ wallet: currencies, expenses }) => ({
  currencies,
  expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
