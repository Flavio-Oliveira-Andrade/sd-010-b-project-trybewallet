import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem } from '../actions/index';

class Table extends React.Component {
  constructor() {
    super();
    this.executTr = this.executTr.bind(this);
    this.remoteItem = this.remoteItem.bind(this);
  }

  remoteItem({ target: { name } }) {
    console.log(name);
    const { data } = this.props;
    data(name);
  }

  executTr() {
    const { expenses } = this.props;
    return (
      <>
        {
          expenses.map((item, index) => (
            <tr key={ index }>
              <td>{item.description}</td>
              <td>{item.tag}</td>
              <td>{item.method}</td>
              <td>{item.value}</td>
              <td>{item.currency}</td>
              <td>{item.value}</td>
              <td>{item.value}</td>
              <td>Real Brasileiro</td>
              <button
                onClick={ this.remoteItem }
                data-testid="delete-btn"
                name={ item.id }
                type="submit"
              >
                Remover

              </button>
            </tr>
          ))
        }
      </>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {
            expenses.length > 0
            && this.executTr()
          }
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  data: (id) => dispatch(removeItem(id)),
});

Table.propTypes = {
  data: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired };

export default connect(null, mapDispatchToProps)(Table);
