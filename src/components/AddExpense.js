import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../AddExpense.css';

class AddExpense extends Component {
  render() {
    const { list } = this.props;

    return (
      <div>
        { list.map(({ description, tag, method, value }, index) => (
          <ul key={ index } className="listItem">
            <li>{ description }</li>
            <li>{ tag }</li>
            <li>{ method }</li>
            <li>{ value }</li>
          </ul>
        )) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.wallet.expenses,
});

AddExpense.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(AddExpense);
