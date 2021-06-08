import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Trow from './Trow';

class Tbody extends Component {
  render() {
    const init = (
      <tr>
        <td />
      </tr>
    );
    const { expenses } = this.props;
    const listExpenses = expenses.map((expense, idx) => (
      <Trow key={ idx } expense={ expense } />
    ));
    return <tbody>{expenses.length > 0 ? listExpenses : init}</tbody>;
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Tbody.propTypes = {
  expenses: PropTypes.arrayOf(),
}.IsRequeried;

export default connect(mapStateToProps)(Tbody);
