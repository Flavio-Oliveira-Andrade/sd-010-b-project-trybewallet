import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.sumItAll = this.sumItAll.bind(this);
  }

  sumItAll() {
    const { expenses } = this.props;
    const expensesArray = expenses.map((entry) => (
      entry.value * entry.exchangeRates[entry.currency].ask));
    const sum = expensesArray.reduce((acc, curr) => acc + curr);
    return parseFloat(sum).toFixed(2);
  }

  render() {
    const { user: { email }, expenses } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          { expenses.lenght > 0 ? this.sumItAll() : 0 }
        </div>
        <div data-testid="header-currency-field">
          Cambio
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Header);
