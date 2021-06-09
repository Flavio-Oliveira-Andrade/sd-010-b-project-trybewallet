import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoin } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { saveCoin } = this.props;
    saveCoin();
  }

  render() {
    const { coinName } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" />
        </label>

        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>

        <label htmlFor="coin">
          Moeda
          <select id="coin">
            { coinName.map((coin) => <option value={ coin } key={ coin }>{coin}</option>)}
          </select>
        </label>

        <label htmlFor="payment-type">
          Método de pagamento
          <select id="payment-type">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="expense-type">
          Tag
          <select id="expense-type">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
Form.propTypes = {
  saveCoin: PropTypes.func.isRequired,
  coinName: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  coinName: state.wallet.coins,
});

const mapDispatchToProps = (dispatch) => ({
  saveCoin: () => dispatch(fetchCoin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
