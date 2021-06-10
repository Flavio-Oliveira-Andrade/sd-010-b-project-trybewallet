import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.funtionCalc = this.funtionCalc.bind(this);
  }

  funtionCalc(acc, curr) {
    return acc + parseFloat(curr.exchangeRates[curr.currency].ask * curr.value);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <section>
        <p data-testid="email-field">{email}</p>
        <p
          data-testid="total-field"
        >
          {!expenses
            ? 0
            : expenses
              .reduce((acc, curr) => this.funtionCalc(acc, curr), 0)
              .toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </section>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
