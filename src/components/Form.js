import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { action, goFetch } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.changer = this.changer.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      valor: undefined,
      descricao: undefined,
      moeda: 'USD',
      'método de pagamento': undefined,
      tag: undefined,
    };
  }

  componentDidMount() {
    const { myDispatchToFetch } = this.props;
    myDispatchToFetch();
  }

  changer({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async submit(event) {
    event.preventDefault();
    const { entradas, cotacoes, myDispatch, myDispatchToFetch } = this.props;
    await myDispatchToFetch();
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
        exchangeRates: cotacoes,
      },
    });
  }

  render() {
    const { moeda, 'método de pagamento': pagamento, tag } = this.state;
    const { moedas } = this.props;
    return (
      <form onSubmit={ this.submit }>
        <label htmlFor="valor">
          Valor
          <input onChange={ this.changer } id="valor" name="valor" type="number" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea name="descricao" id="descricao" onChange={ this.changer } />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda" value={ moeda } onChange={ this.changer }>
            { Array.isArray(moedas) ? (moedas.map((entry) => (
              <option key={ entry } value={ entry }>{ entry }</option>))) : '' }
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de pagamento
          <select
            id="método de pagamento"
            name="método de pagamento"
            value={ pagamento }
            onChange={ this.changer }
          >
            <option hiddden="true">-</option>
            <option key="dinheiro" value="Dinheiro">Dinheiro</option>
            <option key="credito" value="Cartão de crédito">Cartão de crédito</option>
            <option key="debito" value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" value={ tag } onChange={ this.changer }>
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
  myDispatchToFetch: () => dispatch(goFetch()),
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
  myDispatchToFetch: PropTypes.func.isRequired,
};

Form.defaultProps = {
  cotacoes: {},
  moedas: [],
  entradas: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
