import React from 'react';

import './Wallet.css';

class ListHeder extends React.Component {
  render() {
    return (
      <header className="ListHeder">
        <p className="ListP">Descrição</p>
        <p className="ListP">Tag</p>
        <p className="ListP">Método de pagamento</p>
        <p className="ListP">Valor</p>
        <p className="ListP">Moeda</p>
        <p className="ListP">Câmbio utilizado</p>
        <p className="ListP">Valor convertido</p>
        <p className="ListP">Moeda de conversão</p>
        <p className="ListP">Editar/Excluir</p>
      </header>
    );
  }
}

export default ListHeder;
