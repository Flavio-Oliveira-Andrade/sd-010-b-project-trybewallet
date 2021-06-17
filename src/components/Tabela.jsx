import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Tabela extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { expenses } = this.props;
    return (
      // Pra lembrar como faz uma tabela html: https://www.w3schools.com/html/html_tables.asp
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
        {expenses.map((element, index) => (
          <tr key={ index }>
            <td>{element.description}</td>
            <td>{element.tag}</td>
            <td>{element.method}</td>
            <td>{element.value}</td>
            <td>{element.exchangeRates[element.currency].name.split('/')[0]}</td>
            <td>{parseFloat(element.exchangeRates[element.currency].ask).toFixed(2)}</td>
            <td>
              {parseFloat(element.value
                * element.exchangeRates[element.currency].ask).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button type="button" data-testid="delete-btn">Excluir</button>
              <button type="button" data-testid="edit-btn">Editar</button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Tabela.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Tabela);
// PR base: https://github.com/tryber/sd-010-b-project-trybewallet/pull/16/commits/8071133ddcfd96b87c689cd78cca803caccf9c41
