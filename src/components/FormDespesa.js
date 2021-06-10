import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, addDespesa } from '../actions';

import './FormDespesa.css';

class FormDespesa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.renderizaSelectMoeda = this.renderizaSelectMoeda.bind(this);
    this.renderizaSelectPgto = this.renderizaSelectPgto.bind(this);
    this.renderizaSelectTag = this.renderizaSelectTag.bind(this);
    this.renderizaInput = this.renderizaInput.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  onClick() {
    const { id, updateId, addDespesas,
      getCurrency, currencies2: exchangeRates } = this.props;

    this.setState({ value: 0, description: '' });
    updateId();
    addDespesas({ ...this.state, exchangeRates, id });
    getCurrency();
  }

  renderizaInput() {
    const { value } = this.state;
    return (
      <input
        type="text"
        data-testid="value-input"
        id="valor"
        className="valor"
        value={ value }
        onChange={ (e) => this.setState({ value: e.target.value }) }
      />
    );
  }

  renderizaSelectMoeda() {
    const { currencies, loading } = this.props;
    const { currency } = this.state;
    return (
      <label
        htmlFor="moeda"
        className="moeda"
      >
        Moeda
        <select
          data-testid="currency-input"
          id="moeda"
          value={ currency }
          onChange={ (e) => this.setState({ currency: e.target.value }) }
        >
          { loading ? null : currencies.map((result, index) => (
            <option
              key={ index }
              value={ result }
              data-testid={ result }
              className="moeda"
            >
              { result }
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderizaSelectPgto() {
    const { method } = this.state;
    return (
      <select
        data-testid="method-input"
        className="pgto"
        value={ method }
        id="pgto"
        onChange={ (e) => this.setState({ method: e.target.value }) }
      >
        <option key="dinheiro" value="Dinheiro">Dinheiro</option>
        <option
          key="Cartão de crédito"
          value="Cartão de crédito"
        >
          Cartão de crédito
        </option>
        <option value="Cartão de débito" key="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }

  renderizaSelectTag() {
    const { tag } = this.state;
    return (
      <select
        data-testid="tag-input"
        className="tag"
        value={ tag }
        id="tag"
        onChange={ (e) => this.setState({ tag: e.target.value }) }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    );
  }

  render() {
    const { description } = this.state;
    return (
      <div className="geral">
        <label htmlFor="valor">
          Valor
          {this.renderizaInput()}
        </label>
        {this.renderizaSelectMoeda()}
        <label
          htmlFor="pgto"
        >
          Método de pagamento
          {this.renderizaSelectPgto()}
        </label>
        <label
          htmlFor="tag"
        >
          Tag
          {this.renderizaSelectTag()}
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            id="descricao"
            data-testid="description-input"
            className="descricao"
            value={ description }
            onChange={ (e) => this.setState({ description: e.target.value }) }
          />
        </label>
        <button
          type="button"
          className="button"
          onClick={ this.onClick }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currencies2: state.wallet.currencies2,
  loading: state.wallet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchAPI()),
  addDespesas: (state) => dispatch(
    addDespesa(state),
  ),
});

FormDespesa.propTypes = {
  id: PropTypes.number.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies2: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCurrency: PropTypes.func.isRequired,
  updateId: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  addDespesas: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDespesa);
