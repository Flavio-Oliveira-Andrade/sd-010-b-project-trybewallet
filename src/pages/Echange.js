import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EchangeItem from './EchangeItem';

import './Wallet.css';
import ListHeder from './ListHeder';

class Echange extends React.Component {
  render() {
    const { wallet } = this.props;
    return (
      <section>
        <ListHeder />
        {console.log(wallet)}
        {wallet.map((item) => <EchangeItem key={ item.id } wallet={ item } />)}
      </section>
    );
  }
}

Echange.propTypes = {
  wallet: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => ({
  wallet: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Echange);
