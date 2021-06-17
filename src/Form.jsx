import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.formValue = this.formValue.bind(this);
    this.formDescription = this.formDescription.bind(this);
    this.formCurrency = this.formCurrency.bind(this);
    this.formMethod = this.formMethod.bind(this);
    this.formTag = this.formTag.bind(this);
    this.addExpenseButton = this.addExpenseButton.bind(this);
  }

  formValue(value, formControl) {
    // const { value } = this.state;
    return (
      <label htmlFor="values">
        Valor
        <input
          id="values"
          type="number"
          name="value"
          placeholder="Insira valor"
          className="enterValue"
          value={ value }
          onChange={ formControl }
        />
      </label>
    );
  }

  formDescription(description, formControl) {
    // const { description } = this.state;
    return (
      <label htmlFor="descriptions">
        Descrição
        <input
          id="descriptions"
          type="text"
          name="description"
          placeholder="Descreva aqui"
          className="enterDescription"
          value={ description }
          onChange={ formControl }
        />
      </label>
    );
  }

  formCurrency(currency, formControl, coinRequisition) {
    // const { currency } = this.state;
    // const { coinRequisition } = this.state;
    return (
      <label htmlFor="coin">
        Moeda
        <select
          id="coin"
          name="currency"
          value={ currency }
          onChange={ formControl }
        >
          {coinRequisition.map((coin) => (
            <option
              key={ coin }
              value={ coin }
            >
              { coin}
            </option>
          ))}
        </select>
      </label>
    );
  }

  formMethod(method, formControl) {
    // const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          value={ method }
          onChange={ formControl }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  formTag(tag, formControl) {
    // const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          value={ tag }
          onChange={ formControl }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  addExpenseButton(addingExpenses) {
    return (
      <button
        type="button"
        onClick={ addingExpenses }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const {
      formControl,
      value,
      description,
      currency,
      coinRequisition,
      method,
      tag,
      addingExpenses,
    } = this.props;
    return (
      <form>
        {this.formValue(value, formControl)}
        {this.formDescription(description, formControl)}
        {this.formCurrency(currency, formControl, coinRequisition)}
        {this.formMethod(method, formControl)}
        {this.formTag(tag, formControl)}
        {this.addExpenseButton(addingExpenses)}
      </form>
    );
  }
}

Form.propTypes = {
  formControl: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  coinRequisition: PropTypes.arrayOf(PropTypes.string),
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  addingExpenses: PropTypes.func.isRequired,
};

Form.defaultProps = {
  coinRequisition: [],
};

export default Form;
