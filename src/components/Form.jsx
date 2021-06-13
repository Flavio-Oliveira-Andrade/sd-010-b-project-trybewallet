import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApi } from '../actions/wallet';
import Select from './select';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };

    this.renderCurrencysOptions = this.renderCurrencysOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { request } = this.props;
    return request();
  }

  handleChange({ value, id }) {
    this.setState({
      [id]: value,
    });
  }

  renderCurrencysOptions() {
    const { currencies } = this.props;
    return currencies.currencies.map((info, key) => (
      <option key={ key }>{ info.code }</option>
    ));
  }

  render() {
    const { value, description, currency, payment, tag } = this.state;
    return (
      <form className="form">
        <label htmlFor="valor">
          Valor
          <input
            type="number"
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
          payment={ payment }
          tag={ tag }
        />
        <button type="button">Adicionar Despesa</button>
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
};

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(requestApi()),
});

const mapStateToProps = ({ wallet: currencies }) => ({
  currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
