import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchWallet } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { coinAPI } = this.props;
    coinAPI();
    console.log(coinAPI());
  }

  render() {
    const { email } = this.props;
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
          <select id="currency" onChange={ this.handleChange }>
            {/* { currencies.map((currencies) => (<option value={ currencies } key={ currencies }>
                { this.currencies }
              </option>))} */}
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
  email: state.user.email,
  // currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  coinAPI: () => dispatch(fetchWallet()),
  // currencies: () => dispatch(currencies),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  email: PropTypes.string.isRequired,
  coinAPI: PropTypes.func.isRequired,
  // currencies: PropTypes.arrayOf(PropTypes.stirng).isRequired,
};
