import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencyNow, fetchCurrency, totalExpensesExport } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
    this.typeChecker = this.typeChecker.bind(this);
    this.clickSend = this.clickSend.bind(this);
    this.structure = this.structure.bind(this);
  }

  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  // https://www.pluralsight.com/guides/how-to-use-react-to-set-the-value-of-an-input
  typeChecker({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
    // console.log(name, value);
    // this.setState({ ...this.state, name: value })
  }

  clickSend(event) {
    event.preventDefault();
    const { currencyDispatch } = this.props;
    const auxiliarState = this.state;
    currencyDispatch(auxiliarState);
    const { id } = this.state;
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    });
  }

  structure() {
    const { description, method, tag } = this.state;

    return (
      <>
        <label htmlFor="metodo">
          Método de pagamento:
          <select
            type="text"
            id="metodo"
            name="method"
            onChange={ this.typeChecker }
            value={ method }
          >
            <option selected>-</option>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesas">
          Tag:
          <select id="despesas" name="tag" onChange={ this.typeChecker } value={ tag }>
            <option selected>-</option>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            id="descricao"
            name="description"
            onChange={ this.typeChecker }
            value={ description }
          />
        </label>
      </>
    );
  }

  render() {
    const { currencyLabel } = this.props;
    const { value, currency } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            onChange={ this.typeChecker }
            type="number"
            id="valor"
            name="value"
            value={ value }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="currency"
            onChange={ this.typeChecker }
            value={ currency }
          >
            {Object.values(currencyLabel).map((item) => (
              <option key={ item.code } name={ item.name }>{ item.code }</option>
            ))}
          </select>
        </label>
        { this.structure() }
        <button type="submit" onClick={ this.clickSend }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesLabel: state.wallet.expenses,
  currencyLabel: state.wallet.currencies,

});

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrency()),
  currencyDispatch: (state) => dispatch(currencyNow(state)),
  totalExpenses: (state) => dispatch(totalExpensesExport(state)),
});

Form.propTypes = ({
  currencyLabel: PropTypes.shape,
  currencies: PropTypes.string,
}).isRequired;

// export default Form;
export default connect(mapStateToProps, mapDispatchToProps)(Form);
