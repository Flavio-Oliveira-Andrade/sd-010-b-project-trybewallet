import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FormComponent from '../components/FormComponent';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <FormComponent />
      </div>);
  }
}

export default Wallet;
