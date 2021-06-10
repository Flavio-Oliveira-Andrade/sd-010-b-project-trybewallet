import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCambio, expensesAction } from '../actions';
import fetchCambioApi from '../services/fetchCambioApi';

class Form extends React.Component {
  constructor() {
    super();

    this.hChange = this.hChange.bind(this);
    this.idMoreOne = this.idMoreOne.bind(this);
    this.tag = this.tag.bind(this);
    this.funcExchangeRates = this.funcExchangeRates.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.state = {
      spending: {
        id: 0,
        exchangeRates: [],
        valor: '',
        descrit: '',
        moeda: 'USD',
        metPag: '',
        tag: '',
      },
    };
  }

  componentDidMount() {
    const { coinsAction } = this.props;
    coinsAction();
  }

  hChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((oldState) => ({
      spending: {
        ...oldState.spending,
        [name]: value,
      },
    }));
  }

  async funcExchangeRates() {
    const { spending } = this.state;
    const { spendAc } = this.props;
    const resp = await fetchCambioApi();
    const stateAuxiliar = {
      ...spending,
      exchangeRates: [resp],
    };
    spendAc(stateAuxiliar);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      spending: {
        id: 0,
        valor: '',
        descrit: '',
        moeda: 'USD',
        metPag: '',
        tag: '',
        exchangeRates: [],
      },
    });
  }

  idMoreOne() {
    this.setState((old) => ({
      spending: {
        id: old.spending.id + 1,
      },

    }));
  }

  tag() {
    const { spending: { tag } } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select onChange={ this.hChange } value={ tag } id="tag" name="tag">
          <option>{}</option>
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    const { spending: { valor, descrit, metPag, moeda } } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input onChange={ this.hChange } value={ valor } id="valor" type="number" name="valor" />
          </label>
          <label htmlFor="descrit">
            Descrição:
            <input onChange={ this.hChange } value={ descrit } id="descrit" type="text" name="descrit" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select onChange={ this.hChange } value={ moeda } id="moeda" name="moeda">
              {currencies.filter((cur) => cur !== 'USDT')
                .map((currenc) => <option key={ currenc }>{currenc}</option>)}
            </select>
          </label>
          <label htmlFor="metPag">
            Método de pagamento:
            <select onChange={ this.hChange } value={ metPag } id="metPag" name="metPag">
              <option>{}</option>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          {this.tag()}
          <button
            onClick={ () => {
              this.funcExchangeRates();
              this.idMoreOne();
            } }
            type="button"
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  coinsAction: () => dispatch(fetchCambio()),
  spendAc: (spending) => dispatch(expensesAction(spending)),
});

Form.propTypes = {
  coinsAction: PropTypes.func,
  // expensesAction: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
