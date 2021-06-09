import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <section>
        <p data-testid="email-field">{email}</p>
        <p
          data-testid="total-field"
        >
          {!expenses
            ? 0
            : expenses.reduce((acc, curr) => acc + parseInt(curr.value, 10), 0)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </section>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  // currencies: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  // currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
