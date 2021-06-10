import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Forms extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 data-testid="email-field">{ email }</h1>
          <h3 data-testid="total-field">0</h3>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
      </div>
    );
  }
}

export default Forms;
