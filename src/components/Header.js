import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.handleSum = this.handleSum.bind(this);
  }

  handleSum() {
    const { expense } = this.props;
    return expense.reduce((acc, cur) => {
      const currence = cur.currency;
      return acc + (Number(cur.value) * cur.exchangeRates[currence].ask);
    }, 0);
  }

  render() {
    const { user } = this.props;
    return (
      <header>
        <p data-testid="email-field">{`Usuário: ${user}`}</p>
        <p data-testid="total-field">{this.handleSum()}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  expense: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
