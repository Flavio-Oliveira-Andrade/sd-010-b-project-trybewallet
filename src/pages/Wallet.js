import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../component/Form';

class Wallet extends React.Component {
  render() {
    // const { soma } = this.state;
    const { email } = this.props;
    return (
      <>
        <header>
          <h1 data-testid="email-field">{ email }</h1>
          <h2 data-testid="total-field">0</h2>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <Form />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
