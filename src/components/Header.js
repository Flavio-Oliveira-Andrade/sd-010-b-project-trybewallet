import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { login } = this.props;
    const total = 0;
    const currency = 'BRL';

    return (
      <>
        <h4 data-testid="email-field">
          Email:
          { ' ' }
          { login }
        </h4>
        <p data-testid="total-field">
          { total }
        </p>
        <p data-testid="header-currency-field">{ currency }</p>
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
