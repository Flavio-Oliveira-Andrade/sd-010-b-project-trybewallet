import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import PaymentMethod from '../components/PaymentMethod';
import SelectCurr from '../components/SelectCurr';
import { addExpense } from '../actions/index';
import Tag from '../components/Tag';

import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
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
            // onClick={  }
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
  valor: () => dispatch(addExpense(1)),
});

Wallet.propTypes = {
  email: PropTypes.string,
};

Wallet.defaultProps = {
  email: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
