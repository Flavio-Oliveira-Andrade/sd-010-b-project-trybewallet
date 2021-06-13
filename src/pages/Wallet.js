import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { total, cambio } = this.state;
    const { getEmail } = this.props;
    return (
      <>
        <div>TrybeWallet</div>
        <header>
          <p data-testid="email-field">{ getEmail }</p>
          <p data-testid="total-field">{ total }</p>
          <p data-testid="header-currency-field">{ cambio }</p>
        </header>
      </>
    );
  }
}

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
