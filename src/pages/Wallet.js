import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email, total } = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <p data-testid="total-field">{ total }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number,
};

Wallet.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps, null)(Wallet);
