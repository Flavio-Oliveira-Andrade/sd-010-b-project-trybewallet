import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.funcTotal = this.funcTotal.bind(this);
  }

  componentDidMount() {
    this.funcTotal();
  }

  funcTotal() {
    const { expenses } = this.props;

    const calcTotal = expenses.reduce(
      (acc, curr) => acc + parseFloat(curr.value * curr.exchangeRates[curr.currency]
        .ask), 0,
    );
    return calcTotal.toFixed(2);
  }

  render() {
    const { login } = this.props;
    return (
      <div>
        <h2>Usuario: </h2>
        <h2 data-testid="email-field">{login}</h2>
        <h3>Despesa Total: </h3>
        <h3 data-testid="total-field">{ this.funcTotal() }</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  login: PropTypes.object,
}.isRequired;

Wallet.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps)(Wallet);
