import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import editar from '../img/editar.png';
import excluir from '../img/excluir.png';
import { deleteExpense, editExpense } from '../actions';

class EditDeleteButtons extends React.Component {
  render() {
    const { expense, deletar, editer } = this.props;
    return (
      <td className="table-cel">
        <div className="buttons-container">
          <button
            type="button"
            className="excl"
            data-testid="delete-btn"
            onClick={ () => {
              deletar(expense);
            } }
          >
            <img src={ excluir } alt="lixeira" width="20px" />
          </button>
          <button
            type="button"
            className="edit"
            data-testid="edit-btn"
            onClick={ () => editer(expense) }
          >
            <img src={ editar } alt="editar" width="20px" />
          </button>
        </div>
      </td>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deletar: (payload) => dispatch(deleteExpense(payload)),
  editer: (payload) => dispatch(editExpense(payload)),
});

EditDeleteButtons.propTypes = {
  expense: PropTypes.object,
  deletar: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(EditDeleteButtons);
