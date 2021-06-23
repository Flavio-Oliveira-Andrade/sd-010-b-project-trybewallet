import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

export class Header extends Component {
  render() {
    const { email } = this.props;
    const totalExpense = 0;
    const currency = 'BRL';

    return (
      <header div className="wallet-header">
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">{`Email: ${email} `}</p>
        <p data-testid="total-field">{`Despesa: ${totalExpense} `}</p>
        <span data-testid="header-currency-field">{ currency }</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: string.isRequired,
};

export default connect(mapStateToProps)(Header);
