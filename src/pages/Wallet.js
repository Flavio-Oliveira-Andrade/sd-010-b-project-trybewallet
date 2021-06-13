import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionTotal } from '../actions/wallet';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((a, b) => a + b, 0);
  }

  render() {
    const { email } = this.props;
    const LOCAL_CURRENCY = 'BRL';
    return (
      <>
        <header className="header">
          <h3 data-testid="email-field">
            Email:
            {' '}
            { email }
          </h3>
          <h3 data-testid="total-field">
            Despesa Total:
            {' '}
            { this.totalExpenses() }
          </h3>
          <h3 data-testid="header-currency-field">{ CAMBIO }</h3>
        </header>
        <Form />
      </>
    );
  }
}

Wallet.defaultProps = {
  expenses: [],
};

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string),
};

const mapDispathToProps = (dispatch) => ({
  totalExpenses: (total) => dispatch(actionTotal(total)),
});

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

export default connect(mapStateToProps, mapDispathToProps)(Wallet);
