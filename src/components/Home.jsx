import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalGastos: 0,
    };
  }

  render() {
    const { email, expenses } = this.props;
    const { totalGastos } = this.state;

    console.log(expenses);
    return (
      <header>
        <h3 data-testid="email-field">{email}</h3>
        <h3 data-testid="total-field">
          Dispesa Total:
          {totalGastos}
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
        <h3>{expenses}</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  // currencies: state.wallet.currencies,
});

// const mapDispatchToProps = () => {
// };
Home.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Home);
