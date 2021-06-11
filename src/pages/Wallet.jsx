import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import PaymentMethod from '../components/PaymentMethod';
import SelectCurr from '../components/SelectCurr';
import { addExpense } from '../actions';
import Tag from '../components/Tag';

import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialstate();
    this.handleChange = this.handleChange.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getInitialstate = this.getInitialstate.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  getInitialstate() {
    const initialState = {
      id: '',
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    return initialState;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { addExpense } = this.props;
    const { id, value, description, currency, method, tag, exchangeRates } = this.state;
    addExpense({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    });
    console.log(addExpense);
    this.resetState();
  }

  resetState() {
    this.setState(this.getInitialstate());
  }

  renderInputs(labelid, text, type, name) {
    return (
      <label htmlFor={ labelid }>
        {text}
        <input
          id={ labelid }
          type={ type }
          name={ name }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          {email}
          <div className="info--currencie">
            <span data-testid="total-field">Total de gastos: 0</span>
            <span data-testid="header-currency-field">R$BRL</span>
          </div>
        </header>
        <form className="wallet--form">
          {this.renderInputs('value', 'Valor:', 'text', 'value')}
          {this.renderInputs('description', 'Descrição', 'text', 'description')}
          <SelectCurr handleChange={ this.handleChange } />
          <Tag handleChange={ this.handleChange } />
          <PaymentMethod handleChange={ this.handleChange } />
          <button
            type="button"
            className="button--expense"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

// const mapDispatchToProps = (dispatch) => ({
//   valor: () => dispatch(addExpense),
// });

const mapDispatchToProps = (dispatch) => ({

  addExpense: (email) => dispatch(addExpense(email)),
});

Wallet.propTypes = {
  email: PropTypes.string,
};

Wallet.defaultProps = {
  email: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
