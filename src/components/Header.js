import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moeda: props.moeda,
    };
  }

  render() {
    const { email, allExpenses } = this.props;
    const { moeda = 'BRL' } = this.state;
    const total = allExpenses.reduce((acc, curr) => (
      acc + (+curr.value * curr.exchangeRates[curr.currency].ask)), 0);
    return (
      <div>
        <h2 data-testid="email-field">{ email }</h2>
        Despesa Total:
        <span data-testid="total-field">
          { total }
        </span>
        <span data-testid="header-currency-field">{ moeda }</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  allExpenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  moeda: PropTypes.string.isRequired,
  allExpenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
