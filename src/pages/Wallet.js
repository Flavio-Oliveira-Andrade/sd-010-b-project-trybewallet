import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor () {
    super();

    this.state = {
      total: 0,
      loadedPage: false,
    };
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();

    delete json.USDT;
    this.setState({ moedas: json, loadedPage: true });
  };

  // Gerar options do select de moedas
  generateCurrencySelect = () => {
    const { moedas } = this.state;
    const arrays = Object.keys(moedas)
    
    return arrays.map((currency) => <option key={ currency } value={ currency }>{ currency }</option>)
  };

  // Modifica o valor do input total via state
  changeTotalValue = ({ value }) => {
    this.setState({ total: value });
  }

  render() {
    const { total, loadedPage } = this.state;
    const { email } = this.props;

    if (loadedPage) return (
      <>
        <header>
          <p data-testid="email-field">{`Email: ${ email } `}</p>
          <form>
            <label data-testid="total-field">
              Total:
              <input type="text" value={ total } onChange={ ({ target }) => this.changeTotalValue({ target }) }/>
            </label>
            <br />
            <label data-testid="header-currency-field">
            </label>
          </form>
        </header>

        <main>
        <form>
        <label>
            Valor:
            <input type="text" name="name" />
          </label>
          <label>
            Descrição:
            <input type="text" name="name" />
          </label>
          <label>
            Moeda:
            <select>
              { this.generateCurrencySelect() }
            </select>
          </label>
          <label>
            Método de Pagamento:
            <select>
              <option value="cash">Dinheiro</option>
              <option value="debit">Cartão de crédito</option>
              <option value="credit">Cartão de débito</option>
            </select>
          </label>
          <label>
            Tag:
            <select>
              <option value="cash">Alimentação</option>
              <option value="debit">Lazer</option>
              <option value="credit">Trabalho</option>
              <option value="credit">Transporte</option>
              <option value="credit">Saúde</option>
            </select>
          </label>
        </form>
        </main>
      </>
    );

    return <h1>Carregando...</h1>
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

// Wallet.propTypes = {
//   email: PropTypes.string,
//   total: PropTypes.number,
// }.isRequired;

export default connect(mapStateToProps)(Wallet);
