import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Expenses extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <section>
        {expenses.map((expense, key) => (
          <div key={ key }>
            <span>{ expense.value }</span>
            <span>{ expense.description }</span>
            <span>{ expense.tag }</span>
          </div>
        ))}
      </section>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Expenses);
