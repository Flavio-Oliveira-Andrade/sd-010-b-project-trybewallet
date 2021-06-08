import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    const EXPENSE = 0;
    const CURRENCY = 'BRL';
    return (
      <header>
        <p data-testid="email-field">
          Email:
          {' '}
          {userEmail}
        </p>
        <p data-testid="total-field">
          Despesa: R$
          {EXPENSE}
        </p>
        <p data-testid="header-currency-field">{CURRENCY}</p>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
