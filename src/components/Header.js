import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { login, total, currency } = this.props;

    return (
      <>
        <h4 data-testid="email-field">
          Email:
          { ' ' }
          { login }
        </h4>
        <span data-testid="total-field">
          { total }
          { ' ' }
        </span>
        <span data-testid="header-currency-field">{ currency }</span>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
  total: state.wallet.totalExpense,
  currency: state.wallet.curr,
});

Header.propTypes = {
  login: PropTypes.string,
  total: PropTypes.number,
  currency: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
