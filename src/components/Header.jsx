import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailValidate } from '../actions';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, curr) => {
      acc += curr.exchangeRates[curr.currency].ask * curr.value;
      return acc;
    }, 0);
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span
          data-testid="total-field"
        >
          { (Math.round(total * 100) / 100).toFixed(2) }
        </span>
        <span data-testid="header-currency-field">BRL</span>

      </header>
    );
  }
}

Header.propTypes = {
  // checkEmail: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  checkEmail: ({ target: { value } }) => dispatch(emailValidate(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
