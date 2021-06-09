import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="amount">
          Valor
          <input name="amount" type="text" />
        </label>
        <label htmlFor="description">
          Descrição
          <input name="description" type="text" />
        </label>
        <label htmlFor="currencie">
          Moeda
          <select name="currencie">
            {currencies
              .map((ele, index) => <option key={ index } name="currencie">{ele}</option>)}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select name="payment-method">
            <option name="payment-method">Dinheiro</option>
            <option name="payment-method">Cartão de crédito</option>
            <option name="payment-method">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select name="category">
            <option name="category">Alimentação</option>
            <option name="category">Lazer</option>
            <option name="category">Trabalho</option>
            <option name="category">Transporte</option>
            <option name="category">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
