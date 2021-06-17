import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import responseAction from '../actions/responseApiAction';

class ExpensesForm extends React.Component {
  componentDidMount() {
    const { currencyValidation } = this.props;
    currencyValidation();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input id="value" type="text" />
          </label>
          <label htmlFor="description">
            Descrição
            <input id="description" type="text" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {Object.keys(currencies).map((currency) => (
                <option key={ currency }>{currency}</option>
              ))}
            </select>
          </label>
          <label htmlFor="payment-option">
            Método de pagamento
            <select id="payment-option">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="option">
            Tag
            <select
              id="option"
              onChange={ () => this.handleChange() }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button type="submit">Adicionar Despesas</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currencyValidation: () => dispatch(responseAction()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

ExpensesForm.propTypes = ({
  currencies: PropTypes.objectOf.isRequired,
  currencyValidation: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
