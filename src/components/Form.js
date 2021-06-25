import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { action, goFetch } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      valor: undefined,
      descricao: undefined,
      moeda: 'USD',
      pag: undefined,
      tag: undefined,
    };
  }

  componentDidMount() {
    const { dispatch2Fetch } = this.props;
    dispatch2Fetch();
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async submit(event) {
    event.preventDefault();
    const { entradas, cotacoes, myDispatch, dispatch2Fetch } = this.props;
    await dispatch2Fetch();
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    let ID = 0;
    if (entradas.lenght > 0) {
      ID = (entradas[entradas.lenght - 1].id) + 1;
    }
    myDispatch({
      type: 'ADD_EXPENSE',
      payload: {
        id: ID,
        value: valor,
        currency: moeda,
        method: pagamento,
        tag,
        description: descricao,
        exchangeRates: cotacoes,
      },
    });
  }

  render() {
    const { moeda, pag: pagamento, tag } = this.state;
    const { moedas } = this.props;
    return (
      <form onSubmit={ this.submit }>
        <label htmlFor="valor">
          valor
          <input onChange={ this.changeHandler } id="valor" type="number" />
        </label>
        <label htmlFor="descricao">
          <textarea name="descricao" id="descricao" onChange={ this.changeHandler } />
        </label>
        <label htmlFor="moeda">
          moeda
          <select id="moeda" name="moeda" value={ moeda } onChange={ this.changeHandler }>
            { Array.isArray(moedas) ? (moedas.map((entry) => (
              <option key={ entry } value={ entry }>{ entry }</option>))) : '' }
          </select>
        </label>
        <label htmlFor="pagamento">
          Pagamento
          <select
            id="pag"
            name="pag"
            value={ pagamento }
            onChange={ this.changeHandler }
          >
            <option hiddden="true">-</option>
            <option key="dinheiro" value="Dinheiro">Dinheiro</option>
            <option key="credito" value="Cartão de crédito">Cartão de crédito</option>
            <option key="debito" value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
            <option hiddden="true">-</option>
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

const mapDispatchToProps = (dispatch) => ({
  myDispatch: (state) => dispatch(action(state)),
  dispatch2Fetch: () => dispatch(goFetch()),
});

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies[0],
  cotacoes: state.wallet.currencies[1],
  entradas: state.wallet.expenses,
});

Form.propTypes = {
  cotacoes: PropTypes.objectOf(PropTypes.any),
  entradas: PropTypes.arrayOf(PropTypes.any),
  moedas: PropTypes.arrayOf(PropTypes.any),
  myDispatch: PropTypes.func.isRequired,
  dispatch2Fetch: PropTypes.func.isRequired,
};

Form.defaultProps = {
  cotacoes: {},
  moedas: [],
  entradas: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
