import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestApi } from '../actions/wallet';

class Form extends Component {
  constructor(props) {
    super(props);

    this.renderCurrencysOptions = this.renderCurrencysOptions.bind(this);
  }

  componentDidMount() {
    const { requestDales } = this.props;
    return requestDales();
  }

  renderCurrencysOptions() {
    const { currencies } = this.props;
    currencies.map((dale, key) => {
      console.log(dale.code);
      return (
        <option
          key={ key }
          value={ dale.code }
        >
          { console.log(dale.name) }
        </option>
      );
    });
    console.log(currencies);
  }

export default class Form extends Component {
  render() {
    return (
      <form className="form">
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency">
            <option value="dale">dale</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select name="payment">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag">
            <option value="food">Alimentação</option>
            <option value="joy">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.defaultProps = {
  currencies: {},
};

Form.propTypes = {
  requestDales: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string),
};

const mapDispatchToProps = (dispatch) => ({
  requestDales: () => dispatch(requestApi()),
});

const mapStateToProps = ({ wallet: currencies }) => ({
  currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
