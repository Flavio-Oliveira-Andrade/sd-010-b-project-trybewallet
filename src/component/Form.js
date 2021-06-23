import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWallet } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { coinAPI } = this.props;
    coinAPI();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { currenciesName } = this.props;
    console.log(currenciesName);
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            onChange={ this.handleChange }
          >
            { currenciesName.map((currencies) => (
              <option
                value={ currencies }
                key={ currencies }
              >
                { currencies }
              </option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento
          <select id="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesName: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  coinAPI: () => dispatch(fetchWallet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  coinAPI: PropTypes.func.isRequired,
  currenciesName: PropTypes.arrayOf(PropTypes.string).isRequired,
};
