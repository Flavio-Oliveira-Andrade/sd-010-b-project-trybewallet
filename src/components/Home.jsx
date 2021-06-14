import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  totalExpenses() {
    const { expenses } = this.props;
    const result = expenses.reduce((acc, curr) => acc
      + (parseFloat(curr.value) * curr.exchangeRates[curr.currency].ask), 0);
    return result.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{email}</h3>
        <h3 data-testid="total-field">
          Dispesa Total:
          {this.totalExpenses()}
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
        <Link to="/"><h2>Login</h2></Link>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

// const mapDispatchToProps = () => {
// };
Home.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Home);
