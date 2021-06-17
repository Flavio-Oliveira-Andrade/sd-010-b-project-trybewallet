import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { total, email } = this.props;
    return (
      <header>
        <h2 data-testid="email-field">{email}</h2>
        <span data-testid="total-field">{ parseFloat(total).toFixed(2) }</span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  total: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Header;
