import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const tagSelectArray = [
  'Alimentação',
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde'];
const payMethodSelectArray = [
  'Dinheiro',
  'Cartão de débito',
  'Cartão de crédito'];

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.renderInputs = this.renderInputs.bind(this);
    this.renderCurrencySelect = this.renderCurrencySelect.bind(this);
    this.renderTagSelect = this.renderTagSelect.bind(this);
    this.renderPayMethodSelect = this.renderPayMethodSelect.bind(this);
  }

  renderInputs() {
    const { onClick, onChange, wallet, id } = this.props;
    const { expenses } = wallet;
    const expense = expenses.find((expens) => expens.id === id);
    return (
      <div>
        <form id="add-expense">
          <input
            type="text"
            id="value"
            name="value"
            defaultValue={ expense.value }
            data-testid="value-input"
            onChange={ onChange }
          />
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={ expense.description }
            data-testid="description-input"
            size="50"
            onChange={ onChange }
          />
          { this.renderCurrencySelect(expense) }
          { this.renderPayMethodSelect(expense) }
          { this.renderTagSelect(expense) }
          <button id="save-edit" type="button" onClick={ onClick }>Editar despesa</button>
        </form>
      </div>
    );
  }

  renderPayMethodSelect(expense) {
    const { onChange } = this.props;
    return (
      <select
        id="method"
        name="method"
        data-testid="method-input"
        onChange={ onChange }
        defaultValue={ expense.method }
      >
        { payMethodSelectArray
          .map((method) => (<option key={ Math.random() }>{ method }</option>))}
      </select>
    );
  }

  renderTagSelect(expense) {
    const { onChange } = this.props;
    return (
      <select
        name="tag"
        data-testid="tag-input"
        onChange={ onChange }
        defaultValue={ expense.tag }
      >
        { tagSelectArray
          .map((tag) => (<option key={ Math.random() }>{ tag }</option>))}
      </select>
    );
  }

  renderCurrencySelect(expense) {
    const { wallet, onChange } = this.props;
    let { currencies } = wallet;
    currencies = Object
      .keys(currencies[0])
      .filter((currency) => (currency !== 'USDT'));
    return (
      <select
        defaultValue={ expense.currency }
        name="currency"
        data-testid="currency-input"
        onChange={ onChange }
      >
        {currencies.map((currency) => (
          <option
            name="currency"
            key={ Math.sqrt(Math.random() * 100) }
            data-testid={ currency }
          >
            { currency }
          </option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <section id="new-expense">
        <h2 className="secondary-heading">Insira os dados da despesa: </h2>
        { this.renderInputs() }
      </section>
    );
  }
}
AddExpense.propTypes = {
  onClick: PropTypes.func.isRequired,
  wallet: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => ({
  wallet: state.wallet,
});
export default connect(mapStateToProps, null)(AddExpense);
