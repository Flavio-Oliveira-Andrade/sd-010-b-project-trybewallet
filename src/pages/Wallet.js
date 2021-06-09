import React from 'react';
import Proptypes from 'prop-types';
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
    const { email } = this.props;
    const { currencies } = this.state;
    return (
      <>
        <Header email={ email } />
        <Forms currencies={ currencies } />
      </>
    );
  }
}

const mapStateToProps = ({
  user: { email } }) => ({ email });

Wallet.propTypes = {
  email: Proptypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
