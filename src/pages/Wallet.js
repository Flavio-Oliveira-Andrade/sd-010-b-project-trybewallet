import React from 'react';
import { objectOf, string, object } from 'prop-types';
import { connect } from 'react-redux';
import { Header, Forms } from '../components';
import coins from '../services/apiCoins';

class Wallet extends React.Component {
  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    this.setState({ currencies: Object.keys(await coins()) });
  }

  render() {
    const { email, expenses } = this.props;
    const { currencies } = this.state;
    return (
      <>
        <Header email={ email } expenses={ expenses } />
        <Forms currencies={ currencies } />
      </>
    );
  }
}

const mapStateToProps = ({
  user: { email }, wallet: { expenses } }) => ({ email, expenses });

Wallet.propTypes = {
  email: string,
  expenses: objectOf(object),
}.isRequired;

export default connect(mapStateToProps)(Wallet);
