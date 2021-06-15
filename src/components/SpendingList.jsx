import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResult } from '../actions';

class SpendingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: '',
      // currency: '',
      // paymentMethod: '',
      // tag: '',
      // description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { secondDispatch } = this.props;
    secondDispatch();
  }

  handleChange() {
    this.setState({
      // value: target.value,
      // currency: target.value,
      // paymentMethod: target.value,
      // tag: target.value,
      // description: target.value,
    });
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value">
            <input id="value" type="text" onChange={ () => this.handleChange() } />
            Valor
          </label>
          <label htmlFor="description">
            <input id="description" type="text" onChange={ () => this.handleChange() } />
            Descrição
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {Object.keys(currencies).map((currency) => (
                <option key={ currency }>
                  {currency}
                </option>
              )) }
            </select>
          </label>
          <label htmlFor="optionPayment">
            <select id="optionPayment" onChange={ () => this.handleChange() }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
            Método de pagamento
          </label>
          <label htmlFor="option">
            <select id="option" onChange={ () => this.handleChange() }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Trabalho">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
            Tag
          </label>
          <button type="button" onChange={ () => this.handleChange() }>
            Adicionar Despesas
          </button>
        </form>
      </div>
    );
  }
}

SpendingList.propTypes = ({
  currencies: PropTypes.objectOf.isRequired,
  secondDispatch: PropTypes.func.isRequired,
});

const mapDispatchToProps = (dispatch) => ({
  secondDispatch: () => dispatch(getResult()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  email: state.user.email,
});
// A colega Camila tirou uma dúvida no slack sobre o exercício 8, que eu tirei como base para realizar o map.
export default connect(mapStateToProps, mapDispatchToProps)(SpendingList);
