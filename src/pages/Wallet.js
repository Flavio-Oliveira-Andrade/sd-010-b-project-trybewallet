import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1 data-testid="total-field">{ email }</h1>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state)({
  email: state.user.email,
});

export default Wallet;
