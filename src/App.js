import React from 'react';
import responseOfAPiWallet from './apiRequest';

class App extends React.Component {
  render () {
  return (
  <div>Hello, TrybeWallet!{console.log(responseOfAPiWallet)}</div>
    )
  }
}


export default App;
