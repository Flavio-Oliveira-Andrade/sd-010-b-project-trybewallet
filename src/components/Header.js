import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <fieldset>
        <span data-testid="email-field">
          { email }
        </span>
        <span data-testid="total-field">
          0
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
        <span>
          { expenses }
        </span>
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
