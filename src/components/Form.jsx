import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { adicionarDespesa, fetchApi, fetchApiDespesa } from '../actions/index';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };

    this.handlechange = this.handlechange.bind(this);
    this.handleClicar = this.handleClicar.bind(this);
    this.inputMetodo = this.inputMetodo.bind(this);
    this.inputMoedaCorrente = this.inputMoedaCorrente.bind(this);
    this.inputTag = this.inputTag.bind(this);
  }

  componentDidMount() {
    const { saveCoin } = this.props;
    saveCoin();
  }

  handleClicar() {
    const { salvarDespesa } = this.props;
    const { id } = this.state;
    this.setState({ id: id + 1 });
    salvarDespesa(this.state);
  }

  handlechange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  inputMetodo() {
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          id="payment"
          name="method"
          onChange={ this.handlechange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputMoedaCorrente() {
    const { nomeMoeda } = this.props;
    return (
      <label htmlFor="currencie">
        Moeda
        <select
          id="currencie"
          name="currency"
          onChange={ this.handlechange }
        >
          { nomeMoeda.map((currencie) => (
            <option
              value={ currencie }
              key={ currencie }
            >
              { currencie }
            </option>
          ))}
        </select>
      </label>
    );
  }

  inputTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          onChange={ this.handlechange }
        >
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
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            name="value"
            onChange={ this.handlechange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            onChange={ this.handlechange }
          />
        </label>
        { this.inputMoedaCorrente() }
        { this.inputMetodo() }
        {this.inputTag() }
        <button
          type="button"
          onClick={ this.handleClicar }
        >
          Adicionar despesas
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  saveCoin: PropTypes.func.isRequired,
  nomeMoeda: PropTypes.arrayOf(PropTypes.string).isRequired,
  salvarDespesa: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  nomeMoeda: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveCoin: () => dispatch(fetchApi()),
  salvarDespesa: (despesa) => dispatch(fetchApiDespesa(despesa)),
  despesa: (expenses) => dispatch(adicionarDespesa(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
