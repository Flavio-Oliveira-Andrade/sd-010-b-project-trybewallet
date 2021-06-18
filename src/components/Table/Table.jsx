import React from 'react';
import HeaderTable from './HeaderTable';
import ContentsTable from './ContentsTable';

// As conversões de moedas foram baseadas na ajuda dada pelo Marcos Leandro

function Table() {
  return (
    <table>
      <tbody>
        <HeaderTable />
        <ContentsTable />
      </tbody>
    </table>

  );
}

export default Table;
