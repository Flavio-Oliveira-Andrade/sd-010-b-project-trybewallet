import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     exchangesRates: [props.expenses],
  //   };
  // }

  render() {
    const { email, expenses } = this.props;
    let total = 0;
    // Object.values(currencies).forEach((curr) => {
    //   // console.log(curr.code);
    //   expenses.forEach((ex) => {
    //     if (ex.currency === curr.code) {
    //       total += ex.value * curr.ask;
    //     }
    //   });
    // });
    expenses.forEach((ex) => {
      Object.values(ex.exchangeRates).forEach((rate) => {
        if (rate.codein !== 'BRLT' && ex.currency === rate.code) {
          console.log(rate);
          total += ex.value * rate.ask;
        }
      });
    });

    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{total === 0 ? 0 : (total).toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

// valueExpense:
//   state.wallet.expenses.reduce((acc, curr) => acc + parseInt(curr.value, 10), 0),

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
};

export default connect(mapStateToProps, null)(HeaderWallet);
