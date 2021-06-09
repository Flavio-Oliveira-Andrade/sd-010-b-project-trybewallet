import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

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
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  login: PropTypes.string.isRequired,
};
