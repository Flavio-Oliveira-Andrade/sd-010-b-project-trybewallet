import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <span
            data-testid="email-field"
          >
            { email }
          </span>
          <span
            data-testid="total-field"
          >
            0
            { }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
      </div>

    );
  }
}

Header.propTypes = {
  email: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  email: state.user.email,
});
export default connect(mapStateToProps, null)(Header);
