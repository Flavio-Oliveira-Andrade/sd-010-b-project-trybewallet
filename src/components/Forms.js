import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, fetchCotation } from '../actions';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      describe: '',
      expenses: '',
      coin: '',
      categorie: 'food',
      payment: 'money',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchCoin, cotation } = this.props;
    fetchCoin();
    cotation();
  }

  handleChange(event) {
    const { target: { value, id } } = event;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { expenses, describe, coin, payment, categorie } = this.state;
    const { coins } = this.props;
    return (
      <form>
        <label htmlFor="expenses">
          Valor
          <input
            type="number"
            value={ expenses }
            id="expenses"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="describe">
          Descrição
          <input value={ describe } id="describe" onChange={ this.handleChange } />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin" value={ coin } onChange={ this.handleChange }>
            {Object.keys(coins)
              .map((current) => (current !== 'USDT'
                ? <option>{ current }</option>
                : null))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select id="payment" value={ payment } onChange={ this.handleChange }>
            <option value="money">Dinheiro</option>
            <option value="creditCard">Cartão de Crédito</option>
            <option value="debitCard">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="categorie">
          Tag
          <select id="categorie" value={ categorie } onChange={ this.handleChange }>
            <option value="food">Alimentação</option>
            <option value="roby">Lazer</option>
            <option value="job">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="hearth">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

Forms.propTypes = {
  fetchCoin: PropTypes.func.isRequired,
  cotation: PropTypes.func.isRequired,
  coins: PropTypes.shape().isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCoin: () => dispatch(fetchAPI()),
  cotation: () => dispatch(fetchCotation()),
});

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
