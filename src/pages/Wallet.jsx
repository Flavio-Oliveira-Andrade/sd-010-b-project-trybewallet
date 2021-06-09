import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal() {
    const { userExpenses } = this.props;
    const values = userExpenses.map((expense) => expense.value);
    const total = values.reduce((acc, curr) => acc + curr, 0);
    if (!total) return 0;
    return total;
  }

  render() {
    const { userEmail } = this.props;
    const total = this.calculateTotal();
    return (
      <header>
        <section data-testid="email-field">{userEmail}</section>
        <section data-testid="total-field">{`Total: ${total}`}</section>
        <section data-testid="header-currency-field">Moeda atual: BRL</section>
      </header>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
