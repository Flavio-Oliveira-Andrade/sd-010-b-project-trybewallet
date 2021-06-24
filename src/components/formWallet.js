import React from 'react';
import Moedas from './form/moedas';
import Valor from './form/valor';
import Payment from './form/payment';
import Tag from './form/tag';

export default function FormWallet() {
  return (
    <form>
      <Valor />
      <Moedas />
      <Payment />
      <Tag />
    </form>
  );
}
