import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

class FormsDespesa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      tag: 'Alimentação',
      currency: 'USD',
      metodoPagamento: 'Dinheiro',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addDispesa = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { Apifetch } = this.props;
    Apifetch();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addDispesa() {

  }

  render() {
    const { currencies, loading } = this.props;
    console.log(currencies);
    const { tag, currency, metodoPagamento, description, value } = this.state;
    const curren = currencies.filter((c) => c !== 'USDT');
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" value={ value } onChange={ (e) => this.handleChange(e) } />
          </label>

          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" value={ description } onChange={ (e) => this.handleChange(e) } />
          </label>

          <label htmlFor="currency">
            Moeda
            <select name="currency" value={ currency } onChange={ (e) => this.handleChange(e) }>
              {curren.map((curr, index) => (
                <option key={ index } value={ curr }>{curr}</option>
              ))}
            </select>
          </label>

          <label htmlFor="metodoPagamento">
            Método de pagamento
            <select name="metodoPagamento" value={ metodoPagamento }>
              <option value="dinheiro">Dinheiro</option>
              <option value="debito">Cartão de Debito</option>
              <option value="credito">Cartão de Credito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag
            <select name="tag" value={ tag }>
              <option value="alimentacao">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <button onClick={ () => this.addDispesa } type="submit">Adicionar Despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  loading: state.wallet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  Apifetch: () => dispatch(fetchApi()),
});

FormsDespesa.propTypes = {
  Apifetch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};

// export default FormsDespesa;
export default connect(mapStateToProps, mapDispatchToProps)(FormsDespesa);
