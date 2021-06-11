import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.formControl = this.formControl.bind(this);
    this.header = this.header.bind(this);
    this.formValue = this.formValue.bind(this);
    this.formDescription = this.formDescription.bind(this);
    this.formCurrency = this.formCurrency.bind(this);
    this.formMethod = this.formMethod.bind(this);
    this.formTag = this.formTag.bind(this);
    this.currencyRequisition = this.currencyRequisition.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      coinRequisition: [],
    };
  }

  componentDidMount() {
    this.currencyRequisition();
  }

  formControl({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async currencyRequisition() {
    const three = 3;
    const partialResult = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((apiResponse) => apiResponse.json())
      .then((response) => Object.keys(response))
      // .map((item) => delete (item === 'USDT' || item === 'DOGE'))
      .catch((error) => error);
    const result = partialResult.filter((item) => item.length === three);
    this.setState({ coinRequisition: result });
  }

  header() {
    const { usuario } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h4 data-testid="email-field">{`Usuário: ${usuario}`}</h4>
        <h4 data-testid="total-field">Despesa total: 0</h4>
        <h4 data-testid="header-currency-field">Câmbio: BRL</h4>
      </header>
    );
  }

  formValue() {
    const { value } = this.state;
    return (
      <label htmlFor="values">
        Valor
        <input
          id="values"
          type="number"
          name="value"
          placeholder="Insira valor"
          className="enterValue"
          value={ value }
          onChange={ this.formControl }
        />
      </label>
    );
  }

  formDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="descriptions">
        Descrição
        <input
          id="descriptions"
          type="text"
          name="description"
          placeholder="Descreva aqui"
          className="enterDescription"
          value={ description }
          onChange={ this.formControl }
        />
      </label>
    );
  }

  formCurrency() {
    const { currency } = this.state;
    const { coinRequisition } = this.state;
    return (
      <label htmlFor="coin">
        Moeda
        <select
          id="coin"
          value={ currency }
          onChange={ this.formControl }
        >
          { coinRequisition.map((coin) => (
            <option
              key={ coin }
              value={ coin }
            >
              { coin }
            </option>
          ))}
        </select>
      </label>
    );
  }

  formMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          value={ method }
          onChange={ this.formControl }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  formTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          value={ tag }
          onChange={ this.formControl }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <>
        { this.header() }
        <form>
          { this.formValue() }
          { this.formDescription() }
          { this.formCurrency() }
          { this.formMethod() }
          { this.formTag() }
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  usuario: state.user.email,
});

Wallet.propTypes = {
  usuario: PropTypes.string,
};

Wallet.defaultProps = {
  usuario: '',
};

export default connect(mapStateToProps, null)(Wallet);
