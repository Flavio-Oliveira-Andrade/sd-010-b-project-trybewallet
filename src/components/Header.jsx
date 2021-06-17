import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // total: 0,
      currency: 'BRL',
    };
    // this.updateTotal = this.updateTotal.bind(this);
  }

  // componentDidMount() {
  //   // this.updateTotal();
  // }

  // updateTotal() {
  //   const { expenses } = this.props;
  //   let totalValue = 0;
  //   expenses.forEach((expense) => {
  //     totalValue += ((expense.value) * (expense.exchangeRates[expense.currency].ask));
  //   });
  //   // console.log(values);
  //   this.setState({
  //     total: totalValue,
  //   });
  // }

  render() {
    const { email, expenses } = this.props;
    const { currency } = this.state;
    let totalValue = 0;
    expenses.forEach((expense) => {
      totalValue += ((expense.value) * (expense.exchangeRates[expense.currency].ask));
    });
    return (
      <div>
        {/* image-logo */}
        <h3 data-testid="email-field">{ email }</h3>
        <h3 data-testid="total-field">
          { `Valor total: ${(Math.round(totalValue * 100) / 100).toFixed(2)}` }
        </h3>
        <h3 data-testid="header-currency-field">{ currency }</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
