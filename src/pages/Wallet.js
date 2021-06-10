import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Home from '../components/Home';
import FormsDespesa from '../components/FormsDespesa';

class Wallet extends Component {
  render() {
    return (
      <div>
        <FormsDespesa />
        <Home />
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({
//   email: state.user.email,
// });

// const mapDispatchToProps = () => {
// };
export default Wallet;
// export default connect(mapStateToProps, null)(Wallet);
