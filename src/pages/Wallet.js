import React from 'react';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import Expendes from '../components/Expendes';
import fetchCoin from '../helpers/getAPI'

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      spent: 0,
      coin: 'USD',
      paymentMethod: '',
      tag: '',
      description: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick({ target: { id, value } }) {
    this.setState({ [id]: value });
  }
  componentDidMount() {
    this.coinsObject();
  }

  async coinsObject() {
    const coins = await fetchCoin();
    this.setState({ coins });
  }
  render() {
    return (
      <>
        <Header />
        <AddExpense handleClick={ this.handleClick } states={ this.state } />
        <Expendes />
      </>
    );
  }
}

export default Wallet;
