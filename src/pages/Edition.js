import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Table from '../components/Table';
import editAction from '../actions/editAction';

class Edition extends React.Component {
  constructor(props) {
    super(props);
    const { editValues } = this.props;
    this.state = { ...editValues };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleValueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          name="value"
          onChange={ this.handleChange }
          type="text"
          id="value"
          data-testid="value-input"
          value={ value }
        />
      </label>);
  }

  handleDescriptionTextarea() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <textarea
          name="description"
          onChange={ this.handleChange }
          type="text"
          id="description"
          data-testid="description-input"
          value={ description }
        />
      </label>);
  }

  handleCurrencyInput() {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          onChange={ this.handleChange }
          name="currency"
          id="currency"
          data-testid="currency-input"
          value={ currency }
        >
          {currencies
            .map((bit) => (bit !== 'USDT' ? <option key={ bit }>{bit}</option> : null))}
        </select>
      </label>
    );
  }

  handlePaymentMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          onChange={ this.handleChange }
          name="method"
          id="method"
          data-testid="method-input"
          value={ method }
        >
          <option name="method">Dinheiro</option>
          <option name="method">Cartão de crédito</option>
          <option name="method">Cartão de débito</option>
        </select>
      </label>);
  }

  handleTagInput() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          onChange={ this.handleChange }
          name="tag"
          id="tag"
          data-testid="tag-input"
          value={ tag }
        >
          <option name="tag">Alimentação</option>
          <option name="tag">Lazer</option>
          <option name="tag">Trabalho</option>
          <option name="tag">Transporte</option>
          <option name="tag">Saúde</option>
        </select>
      </label>);
  }

  handleClick() {
    const { editRow, history } = this.props;
    editRow(this.state);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          {this.handleValueInput()}
          {this.handleDescriptionTextarea()}
          {this.handleCurrencyInput()}
          {this.handlePaymentMethod()}
          {this.handleTagInput()}
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Editar despesa
          </button>
        </form>
        <Table disable />
      </div>
    );
  }
}

Edition.propTypes = {
  currencies: PropTypes.arrayOf(String).isRequired,
  editRow: PropTypes.func.isRequired,
  editValues: PropTypes.shape(Object).isRequired,
  history: PropTypes.shape(Object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  data: state.wallet.data,
  editValues: state.edit.editionKey,
});

const mapDispatchToProps = (dispatch) => ({
  editRow: (stateData) => dispatch(editAction(stateData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edition);
