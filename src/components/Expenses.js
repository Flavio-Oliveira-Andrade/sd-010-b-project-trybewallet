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
            <span>{ expense.expenses }</span>
            <span>{ expense.describe }</span>
            <span>{ expense.categorie }</span>
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
