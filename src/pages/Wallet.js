import React from 'react';
import Header from '../components/Header';
import { SpendingList } from '../components/SpendingList';

class Wallet extends React.Component {
  render() {
    // // const { currencies, expenses } = this.props;
    // const { email } = this.props;
    return (
      <div>
        <Header />
        <table />
        <SpendingList />
      </div>
    );
  }
}

export default Wallet;
// stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option
