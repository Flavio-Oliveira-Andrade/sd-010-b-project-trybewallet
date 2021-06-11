import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expensesExport, fetchCurrency } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
    this.typeChecker = this.typeChecker.bind(this);
    this.clickSend = this.clickSend.bind(this);
  }

  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  typeChecker({ target: { name, value } }) {
    this.setState([{
      [name]: value,
    }]);
    // console.log(name, value);
    // this.setState({ ...this.state, name: value })
  }

  clickSend(event) {
    event.preventDefault();
    const { expenses, currencyLabel } = this.props;
    const auxiliarState = {
      ...this.state,
      exchangeRates: currencyLabel,
    };
    expenses(auxiliarState);
    const { id } = this.state;
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { currencyLabel } = this.props;
    // const { state } = this;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input onChange={ this.typeChecker } type="number" id="valor" name="value" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="currency" onChange={ this.typeChecker }>
            {Object.values(currencyLabel).map((item) => (
              <option key={ item.code } name={ item.name }>{ item.code }</option>
            ))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select type="text" id="metodo" name="method" onChange={ this.typeChecker }>
            <option selected>-</option>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesas">
          Tag:
          <select id="despesas" name="tag" onChange={ this.typeChecker }>
            <option selected>-</option>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <label htmlFor="descricao">
            Descrição:
            <input
              type="text"
              id="descricao"
              name="description"
              onChange={ this.typeChecker }
            />
          </label>
        </label>
        <button type="submit" onClick={ this.clickSend }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyLabel: state.wallet.currencies,
});

const MapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrency()),
  expenses: (state) => dispatch(expensesExport(state)),
});

Form.propTypes = ({
  currencyLabel: PropTypes.shape,
  currencies: PropTypes.string,
}).isRequired;

// export default Form;
export default connect(mapStateToProps, MapDispatchToProps)(Form);
