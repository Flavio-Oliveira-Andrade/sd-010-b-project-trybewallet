import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApiCoin } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { saveCoin } = this.props;
    saveCoin();
  }

  render() {
    const { coinNames } = this.props;
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
        <label htmlFor="currencie">
          Moeda
          <select id="currencie">
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
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  saveCoin: PropTypes.func.isRequired,
  coinNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  coinNames: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCoin: () => dispatch(fetchApiCoin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
