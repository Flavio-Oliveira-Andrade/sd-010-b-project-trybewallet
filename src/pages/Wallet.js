import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import '../style/wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { total } = this.state;
    return (
      <div>
        <header className="header">
          <h3 data-testid="email-field">{ email }</h3>
          <div className="currency">
            <h3 data-testid="total-field">{ total }</h3>
            <h3 data-testid="header-currency-field">BRL</h3>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
