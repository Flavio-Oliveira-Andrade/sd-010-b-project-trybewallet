import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.moedas = this.moedas.bind(this);
    this.valor = this.valor.bind(this);
    this.descricao = this.descricao.bind(this);
    this.method = this.method.bind(this);
    this.tag = this.tag.bind(this);
    this.saveExpense = this.saveExpense.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  saveExpense() {
    const { saveExpense } = this.props;
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
    saveExpense(this.state);
  }

  moedas(value) {
    const { currencies } = this.props;
    return (
      <label id="currency" htmlFor="currency">
        Moeda
        <select
          value={ value }
          onChange={ this.handleChange }
          name="currency"
          data-testid="currency-input"
        >
          <option value="USD">USD</option>
          { currencies.map((coin) => {
            if (coin !== 'USDT' && coin !== 'USD') {
              return (
                <option
                  value={ coin }
                  key={ coin }
                >
                  {coin}
                </option>
              );
            }
            return '';
          })}
        </select>
      </label>
    );
  }

  valor(value) {
    return (
      <label id="value-input" htmlFor="value-input">
        Valor:
        <input
          name="value"
          value={ value }
          onChange={ this.handleChange }
          data-testid="value-input"
        />
      </label>
    );
  }

  descricao(value) {
    return (
      <label id="description-input" htmlFor="description-input">
        Descrição:
        <input
          value={ value }
          onChange={ this.handleChange }
          name="description"
          data-testid="description-input"
        />
      </label>
    );
  }

  method(value) {
    return (
      <label id="method" htmlFor="method">
        Método de pagamento
        <select
          onChange={ this.handleChange }
          value={ value }
          name="method"
          data-testid="method-input"
        >
          <option>Selecione uma opção</option>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  tag(value) {
    return (
      <label id="tag" htmlFor="tag">
        Tag
        <select
          onChange={ this.handleChange }
          value={ value }
          name="tag"
          data-testid="tag-input"
        >
          <option>Selecione uma opção</option>
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
    const { value, description, currency, method, tag } = this.state;
    return (
      <section>
        <form>
          { this.valor(value) }
          { this.descricao(description) }
          { this.moedas(currency) }
          { this.method(method) }
          { this.tag(tag) }
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf({}),
  saveExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Form);
