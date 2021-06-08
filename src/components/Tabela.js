import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteItem } from '../actions';

import './Tabela.css';

class Tabela extends React.Component {
  constructor() {
    super();

    this.renderTableData = this.renderTableData.bind(this);
  }
  // LÓGICA DA TABELA BUSCADA NOS SITES: https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
  // E https://edrodrigues.com.br/blog/criando-tabelas-com-filtros-%E2%80%8B%E2%80%8Busando-react/#:~:text=Criando%20Uma%20Tabela%20Com%20O,listando%20uma%20linha%20por%20produto.&text=Aqui%2C%20aceitamos%20uma%20variedade%20de,em%20loop%20em%20nossa%20tabela.

  renderTableData() {
    const { expenses, deletarItem } = this.props;

    return expenses.map((expense) => {
      const { id, description, tag,
        method, value, currency, exchangeRates } = expense;

      const valorTotal = exchangeRates[currency].ask * value;

      return (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{exchangeRates[currency].name.split('/')[0]}</td>
          <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
          <td>{parseFloat(valorTotal).toFixed(2)}</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              className="button"
              data-testid="delete-btn"
              onClick={ () => { deletarItem(id); } }
            >
              Excluir
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="geral">
        <table className="despesas">
          <thead>
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
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deletarItem: (id) => dispatch(deleteItem(id)),
});

Tabela.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletarItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
