import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApi } from '../actions/wallet';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: {
        value: 0,
        description: '',
        currency: '',
        payment: '',
        tag: '',
      },
    };

    this.renderCurrencysOptions = this.renderCurrencysOptions.bind(this);
  }

  componentDidMount() {
    const { request } = this.props;
    return request();
  }

  renderCurrencysOptions() {
    const { currencies } = this.props;
    return currencies.currencies.map((dale, key) => (
      <option key={ key }>{ dale.code }</option>
    ));
  }

  render() {
    return (
      <form className="form">
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="moeda">
            { this.renderCurrencysOptions() }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value="food">Alimentação</option>
            <option value="joy">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar Despesa</button>
      </form>
    );
  }
}

Form.defaultProps = {
  currencies: {},
};

Form.propTypes = {
  request: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string),
};

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(requestApi()),
});

const mapStateToProps = ({ wallet: currencies }) => ({
  currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
