import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader() {
    const { email/* , currencies, expenses */ } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        {/* <span data-testid="total-field">{ `R$ ${currencies - expenses}` }</span> */}
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }

  render() {
    return (
      <>
        { this.renderHeader() }
      </>
    );
  }
}

const mapStateToProps = ({ user: { email }/* ,wallet: { currencies, expenses } */ }) => ({
  email,
  /* currencies,
  expenses, */
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
