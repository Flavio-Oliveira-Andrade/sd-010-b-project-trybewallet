import React from 'react';

function Header(props) {
  const { emailUser, field } = props
  return (
    <header>
      <h2 data-testid="email-field">{emailUser}</h2>
      <h3 data-testid="total-field">{field}</h3>
      <h3 data-testid="header-currency-field">BRL</h3>
    </header>
  )
}

export default Header;