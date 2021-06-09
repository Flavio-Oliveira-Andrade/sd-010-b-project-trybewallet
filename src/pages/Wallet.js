import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1 data-testid="total-field">{ email }</h1>
          <h3 data-testid="total-field">0</h3>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state)({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
