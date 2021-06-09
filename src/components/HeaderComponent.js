import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderComponent extends Component {s
  render() {
    const { email, total } = this.props;
    return (
      <header>
        <h1>Trybe Wallet</h1>
        <div
          data-testid="email-field"
        >
          { email }
        </div>
        <div
          data-testid="total-field"
        >
          { total }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.totalExpenses,
});

HeaderComponent.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number,
};

HeaderComponent.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps, null)(HeaderComponent);
