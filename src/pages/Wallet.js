import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <div>
            <h2 data-testid="email-field">{ email }</h2>
            <span data-testid="total-field">0</span>
            <span> </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
        <section>
          <form />
        </section>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
