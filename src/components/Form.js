import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction, getInApi } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: 0,
      descricao: 'Hot Dog',
      moeda: 'USD',
      'método de pagamento': undefined,
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchFiltered } = this.props;
    fetchFiltered();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(event) {
    event.preventDefault();
    const { entradas, exchangeRate, myDispatch, fetchFiltered } = this.props;
    await fetchFiltered();
    const { valor, descricao, 'método de pagamento': pagamento, moeda, tag } = this.state;
    let newId = 0;
    if (entradas.length > 0) {
      newId = (entradas[entradas.length - 1].id) + 1;
    }
    myDispatch({
      type: 'ADD_EXPENSE',
      payload: {
        id: newId,
        value: valor,
        currency: moeda,
        method: pagamento,
        tag,
        description: descricao,
        exchangeRates: exchangeRate,
      },
    });
  }

  render() {
    const { moeda, 'método de pagamento': pagamento, tag } = this.state;
    const { moedas } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="valor">
          Valor
          <input id="valor" name="valor" type="number" onChange={ this.handleChange } />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea id="descricao" name="descricao" onChange={ this.handleChange } />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda" value={ moeda } onChange={ this.handleChange }>
            { Array.isArray(moedas) ? (moedas.map((entry) => (
              <option key={ entry } value={ entry }>{ entry }</option>
            ))) : '' }
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de pagamento
          <select
            id="método de pagamento"
            name="método de pagamento"
            value={ pagamento }
            onChange={ this.handleChange }
          >
            <option hidden={ false }>-</option>
            <option key="dinheiro" value="Dinheiro">Dinheiro</option>
            <option key="credito" value="Cartão de crédito">Cartão de crédito</option>
            <option key="debito" value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
            <option hidden={ false }>-</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies[0],
  exchangeRate: state.wallet.currencies[1],
  entradas: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  myDispatch: () => dispatch(loginAction()),
  fetchFiltered: () => dispatch(getInApi()),
});

Form.propTypes = {
  exchangeRate: PropTypes.objectOf(PropTypes.any),
  entradas: PropTypes.arrayOf(PropTypes.any),
  moedas: PropTypes.arrayOf(PropTypes.any),
  myDispatch: PropTypes.func.isRequired,
  fetchFiltered: PropTypes.func.isRequired,
};

Form.defaultProps = {
  exchangeRate: {},
  entradas: [],
  moedas: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
