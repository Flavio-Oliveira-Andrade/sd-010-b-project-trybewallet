import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();

    this.saveCoin = this.saveCoin.bind(this);

    this.state = {
      moeda: {},
    };
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => this.saveCoin(json));
  }

  saveCoin(obj) {
    this.setState({
      moeda: obj,
    });
  }

  render() {
    const { email } = this.props;
    const { moeda } = this.state;
    return (
      <div>
        <header>
          <h1 data-testid="email-field">{ email }</h1>
          <h2 data-testid="total-field">0</h2>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              {
                Object.keys(moeda).map((element) => element !== 'USDT'
                && <option key={ element }>{element}</option>)
              }
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
