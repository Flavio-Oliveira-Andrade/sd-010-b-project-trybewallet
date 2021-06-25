import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../../actions/index';

function AllExpenses(props) {
  const { expenses, remExpense } = props;
  const allExpenses = expenses.map(({ id,
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates }) => {
    const findCurrency = Object.values(exchangeRates)
      .find((rate) => (currency === rate.code));
    const currencyName = findCurrency.name.replace('/Real Brasileiro', '');
    return (
      <tr key={ id }>
        <td key={ description }>{description}</td>
        <td key={ tag }>{tag}</td>
        <td key={ method }>{method}</td>
        <td key={ value }>{value}</td>
        <td key={ currencyName }>{currencyName}</td>
        <td key={ findCurrency.ask }>
          {Math.round(parseFloat(findCurrency.ask) * 100) / 100}
        </td>
        <td key={ `${parseFloat(value) * parseFloat(findCurrency.ask)}` }>
          { Math.round((parseFloat(value) * parseFloat(findCurrency.ask)) * 100) / 100 }
        </td>
        <td key="Real">Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => remExpense(id) }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      { allExpenses }
    </div>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remExpense: (id) => dispatch(removeExpense(id)),
});

AllExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  remExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllExpenses);
