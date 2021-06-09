import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store/index';

class Wallet extends Component {
  constructor() {
    super();

    this.state = {
      custo: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { custo, currency } = this.state;
    const { login } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          { login }
        </p>
        <span data-testid="total-field">
          { custo }
        </span>
        <span data-testid="header-currency-field">
          { currency }
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
