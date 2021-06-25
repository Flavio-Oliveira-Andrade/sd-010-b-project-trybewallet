import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { emailUser, field } = props;
  return (
    <header>
      <h2 data-testid="email-field">{emailUser}</h2>
      <h3 data-testid="total-field">{field}</h3>
      <h3 data-testid="header-currency-field">BRL</h3>
    </header>
  );
}

Header.propTypes = {
  emailUser: PropTypes.string.isRequired,
  field: PropTypes.number.isRequired,
};

export default Header;
