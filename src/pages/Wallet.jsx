import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Description from '../components/Description';
import Value from '../components/Value';
import PaymentMethod from '../components/PaymentMethod';
import Tag from '../components/Tag';
import SelectCurr from '../components/SelectCurr';
import { addExpense } from '../actions';

import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.initialState = this.initialState.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  initialState() {
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
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
    this.setState(this.initialState());
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
          <Value handleChange={ this.handleChange } />
          <Description handleChange={ this.handleChange } />
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
