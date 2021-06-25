import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApiCoin } from '../actions';

class FormExpanses extends React.Component {
  componentDidMount() {
    const { saveCoin } = this.props;
    saveCoin();
  }

  inputMethod() {
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select id="payment" name="method" onChange={ this.handlechange }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputCurrency() {
    const { coinNames } = this.props;
    return (
      <label htmlFor="currencie">
        Moeda
        <select id="currencie" name="currency" onChange={ this.handlechange }>
          { coinNames.map((currencie) => (
            <option
              value={ currencie }
              key={ currencie }
            >
              { currencie }
            </option>
          ))}
        </select>
      </label>
    );
  }

  inputTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ this.handlechange }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
          />
        </label>
        { this.inputCurrency() }
        { this.inputMethod() }
        {this.inputTag() }
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesas
        </button>
      </form>
    );
  }
}

FormExpanses.propTypes = {
  saveCoin: PropTypes.func.isRequired,
  coinNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  coinNames: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCoin: () => dispatch(fetchApiCoin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpanses);
