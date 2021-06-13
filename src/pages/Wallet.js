import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TUNK } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cambio: 'BRL',
      moedas: [],
    };
    this.atualizaMoedas = this.atualizaMoedas.bind(this);
  }

  componentDidMount() {
    const { getAPI } = this.props;
    getAPI().then(() => {
      this.atualizaMoedas();
    });
  }

  atualizaMoedas() {
    const { getMoedas } = this.props;
    this.setState({ moedas: getMoedas });
  }

  render() {
    const { total, cambio, moedas } = this.state;
    const { getEmail } = this.props;
    return (
      <>
        <div>TrybeWallet</div>
        <header>
          <p data-testid="email-field">{ getEmail }</p>
          <p data-testid="total-field">{ total }</p>
          <p data-testid="header-currency-field">{ cambio }</p>
        </header>
        <form>
          <label htmlFor="inputValor">
            Valor:
            <input name="value" id="inputValor" />
          </label>
          <label htmlFor="inputDescricao">
            Descrição:
            <input name="description" id="inputDescricao" />
          </label>
          <label htmlFor="input-moeda">
            Moedas:
            <select name="currency" id="input-moeda">
              {moedas.filter((moeda) => moeda !== 'USDT')
                .map((moedae) => (<option key={ moedae }>{ moedae }</option>))}
            </select>
          </label>
          <label htmlFor="input-pagamento">
            Método de Pagamento:
            <select name="method" id="input-pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão-de-credito">Cartão de crédito</option>
              <option value="Cartão-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-debito">
            Tag
            <select name="tag" id="input-debito">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getAPI: PropTypes.func.isRequired,
  getMoedas: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getMoedas: state.wallet.currencies[0],
});

const mapDispatchToProps = (dispatch) => ({
  getAPI: () => dispatch(TUNK),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
