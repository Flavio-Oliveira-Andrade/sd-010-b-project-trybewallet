import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        {email}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

// const mapDispatchToProps = () => {
// };

export default connect(mapStateToProps)(Wallet);
