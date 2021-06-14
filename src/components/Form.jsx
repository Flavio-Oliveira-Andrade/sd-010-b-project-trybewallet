import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencyNow, fetchCurrency, totalExpensesExport } from '../actions';
import { OptionPayment, OptionExpenses } from './options';

class Form extends React.Component {
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
    this.validateType = this.validateType.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.structure = this.structure.bind(this);
  }

  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  validateType({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { currencyDispatch } = this.props;
    const oldState = this.state;
    currencyDispatch(oldState);
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
            onChange={ this.validateType }
            value={ method }
          >
            <OptionPayment />
          </select>
        </label>
        <label htmlFor="despesas">
          Tag:
          <select id="despesas" name="tag" onChange={ this.validateType } value={ tag }>
            <OptionExpenses />
          </select>
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            id="descricao"
            name="description"
            onChange={ this.validateType }
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
            onChange={ this.validateType }
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
            onChange={ this.validateType }
            value={ currency }
          >
            {Object.values(currencyLabel).map((item) => (
              <option key={ item.code } name={ item.name }>{ item.code }</option>
            ))}
          </select>
        </label>
        { this.structure() }
        <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
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
  currencyLabel: PropTypes.shape(),
  currencies: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
