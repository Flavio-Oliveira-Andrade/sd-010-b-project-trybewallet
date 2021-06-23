import React from 'react';

class Table extends React.Component {
  funcaoTabela(cabecalho, linhas) {
    return (
      <table>
        <tr>
          {cabecalho.map((string, index) => (<th key={ index }>{string}</th>))}
        </tr>
        <tr>
          {linhas.map((string, index) => (<td key={ index }>{string}</td>))}
        </tr>
      </table>
    );
  }

  render() {
    const cabecalho = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const linhas = ['tes', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'fim'];
    return (
      <>
        {this.funcaoTabela(cabecalho, linhas)}
      </>
    );
  }
}

export default Table;
