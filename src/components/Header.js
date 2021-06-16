import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses, currencies } = this.props;
    return (
      <div>
        <div>TrybeWallet</div>
        <header>
          <span data-testid="email-field">
            { email }
          </span>
          <span data-testid="total-field">
            0
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <div>
          <input
            type="text"
            value={ currencies }
            placeholder="despesas"
          />
          { expenses }

          <input
            type="text"
            placeholder="câmbio"
          />
        </div>
      </div>
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
  currencies: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps, null)(Header);
