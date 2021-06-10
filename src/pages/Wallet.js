import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      // outgoing: 0,
    };
  }

  render() {
    const { login, total/* , expenses */ } = this.props;
    // console.log(expenses.reduce((acc, { valor, ask }) => acc + parseFloat(curr.valor), 0));
    // const { outgoing } = this.state;
    return (
      <div>
        <h2>Usuario: </h2>
        <h2 data-testid="email-field">{login}</h2>
        <h3>Despesa Total: </h3>
        <h3 data-testid="total-field">{total}</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
  total: state.wallet.outgoing,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  login: PropTypes.object,
}.isRequired;

Wallet.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps)(Wallet);
