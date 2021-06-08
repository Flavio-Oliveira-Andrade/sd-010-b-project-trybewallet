import React, { Component } from 'react';
import Thead from './Thead';
import Tbody from './Tbody';

class Table extends Component {
  render() {
    return (
      <table>
        <Thead />
        <Tbody />
      </table>
    );
  }
}

export default Table;
