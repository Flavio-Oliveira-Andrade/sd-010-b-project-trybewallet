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
      payment: 'Dinheiro',
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

  renderValueLabel() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="text"
          name="value"
          id="value"
          value={ value }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>);
  }

  renderDescriptionLabel() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>);
  }

  renderCurrencyLabel() {
    const { currencies } = this.props;
    const { currency } = this.state;
    const curren = currencies.filter((c) => c !== 'USDT');
    return (

      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id={ currency }
          value={ currency }
          onChange={ (e) => this.handleChange(e) }
        >
          {curren.map((curr, index) => (
            <option key={ index } value={ curr }>{curr}</option>
          ))}
        </select>
      </label>);
  }

  renderPaymentLabel() {
    const { payment } = this.state;
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select name="payment" id={ payment } value={ payment }>
          <option value="dinheiro">Dinheiro</option>
          <option value="debito">Cartão de Debito</option>
          <option value="credito">Cartão de Credito</option>
        </select>
      </label>);
  }

  renderTagLabel() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" value={ tag }>
          <option value="alimentacao">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>);
  }

  render() {
    return (
      <form>
        {this.renderValueLabel()}
        ;
        {this.renderDescriptionLabel()}
        ;
        {this.renderCurrencyLabel()}
        ;
        {this.renderPaymentLabel()}
        ;
        {this.renderTagLabel()}
        <button onClick={ () => this.addDispesa } type="submit">Adicionar Despesa</button>
      </form>
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
