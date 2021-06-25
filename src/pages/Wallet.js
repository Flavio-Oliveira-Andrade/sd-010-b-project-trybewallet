import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Expense from '../components/Expense';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">
          {email}
        </span>
        <span>
          Gastos
          <input
            data-testid="total-field"
            readOnly
            name="total-expense"
            value="0"
          />
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>

        <span>
          <Expense />
        </span>
        <span>
          <Table />
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
