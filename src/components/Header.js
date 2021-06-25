import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'BRL',
    };
  }

  render() {
    const { currency } = this.state;
    const { email, expenses } = this.props;
    // console.log(email);
    // console.log(expenses[0]);
    const somaTotal = expenses.reduce((acc, curr) => (
      acc + (curr.value * curr.exchangeRates[curr.currency].ask)
    ), 0);
    return (
      <div>
        <h4 data-testid="email-field">{`Usuário: ${email}`}</h4>
        <h3 data-testid="total-field">{`Total de despesas: ${somaTotal}`}</h3>
        <h3 data-testid="header-currency-field">{`Moeda correntre: ${currency}`}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
