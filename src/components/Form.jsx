import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currencyAPI, fetchCotation } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoDispense: {
        currency: '',
        description: '',
        method: '',
        tag: '',
        value: '',
      },
    };
    this.addExpense = this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatchAPI } = this.props;
    dispatchAPI();
  }

  handleChange(event) {
    const { target: { value, name } } = event;
    const { infoDispense } = this.state;
    const { idExpense } = this.props;
    const id = idExpense;
    this.setState({
      infoDispense: {
        ...infoDispense,
        [name]: value,
        id,
      },
    });
  }

  addExpense() {
    const { infoDispense } = this.state;
    const { cotation } = this.props;
    cotation(infoDispense);
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="valor-despesa">
            Valor:
            <input type="number" name="valor-despesa" id="valor-despesa" onChange={ this.handleChange } />
          </label>
          <label htmlFor="descricao-despesa">
            Descrição:
            <input type="text" name="descricao-despesa" id="descricao-despesa" onChange={ this.handleChange } />
          </label>
          <label htmlFor="select-moeda">
            Moeda:
            <select name="select-moeda" id="select-moeda" onChange={ this.handleChange }>
              {Object.keys(currencies).filter((cur) => cur !== 'USDT')
                .map((cur) => <option key={ cur } value={ cur }>{cur}</option>)}
            </select>
          </label>
          <label htmlFor="metodo-pagamento-despesa">
            Método de pagamento:
            <select
              type="text"
              name="metodo-pagamento-despesa"
              id="metodo-pagamento-despesa"
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao-de-credito">Cartão de crédito</option>
              <option value="cartao-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-despesa">
            Tag:
            <select type="text" name="tag-despesa" id="tag-despesa">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
        <button type="button" onClick={ this.addExpense }>Adicionar despesa</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAPI: () => (dispatch(currencyAPI())),
  cotation: (expense) => dispatch(fetchCotation(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  cotation: PropTypes.func.isRequired,
  currencies: PropTypes.any.isRequired,
  dispatchAPI: PropTypes.func.isRequired,
  idExpense: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
