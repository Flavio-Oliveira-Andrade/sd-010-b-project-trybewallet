import React from 'react';
import { PropTypes } from 'prop-types';

import EditDeleteButtons from './EditDeleteButtons';
import renderColumn from '../functions/renderColumn';

class ResultsTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <tbody>
        {expenses.map((expense, i) => (
          <tr key={ i } className="table-row">
            {renderColumn(expense)}
            <td className="table-cel">
              Real
            </td>
            <EditDeleteButtons expense={ expense } />
          </tr>
        )) }
      </tbody>
    );
  }
}

ResultsTable.propTypes = {
  expenses: PropTypes.object,
}.isRequired;

export default ResultsTable;
