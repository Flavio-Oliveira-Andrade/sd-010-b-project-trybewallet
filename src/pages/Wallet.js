import React from 'react';
import Expense from '../components/Expense';
import Table from '../components/Table';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
    this.updateId = this.updateId.bind(this);
  }

  updateId() {
    this.setState((prev) => ({ id: prev.id + 1 }));
  }

  render() {
    const { id } = this.state;
    return (
      <div>
        <span>
          <Header />
        </span>

        <span>
          <Expense id={ id } updateId={ this.updateId } />
        </span>
        <span>
          <Table />
        </span>
      </div>
    );
  }
}

export default Wallet;
